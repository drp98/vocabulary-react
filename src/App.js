import React, { Suspense } from 'react'
import NavBar from './NavBar'
import Loader from './Loader'

const Words = React.lazy(() => import('./Words'))

const App = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <NavBar />
                <Words />
            </Suspense>
        </>
    )
}

export default App
