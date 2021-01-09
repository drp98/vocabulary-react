export function fetchWordData(wordId) {
    let wordPromise = fetchWord(wordId)
    return {
        wordId,
        word: wrapPromise(wordPromise),
    }
}

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

export function fetchWord(wordId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${wordId}`)
        .then(response => response.json())
        .then(json => json)
}
