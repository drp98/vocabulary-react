import React, {Suspense} from 'react'
import NavBar from './NavBar'
import {Spinner} from './Spinner'

const Words = React.lazy(() => import('./Words'))

const App = () => {
    return (
        <>
            <NavBar />
            <Suspense fallback={<Spinner />}>
                <Words />
            </Suspense>
        </>
    )
}

export default App
