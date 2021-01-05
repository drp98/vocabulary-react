export function fetchProfileData(userId) {
    let userPromise = fetchUser(userId)
    return {
        userId,
        word: wrapPromise(userPromise),
    }
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
    let status = 'pending'
    let result
    let suspender = promise.then(
        r => {
            status = 'success'
            result = r
        },
        e => {
            status = 'error'
            result = e
        }
    )
    return {
        read() {
            if (status === 'pending') {
                throw suspender
            } else if (status === 'error') {
                throw result
            } else if (status === 'success') {
                return result
            }
        },
    }
}

export function fetchUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(json => json)
}
