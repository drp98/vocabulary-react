import React, { Suspense } from 'react'
import NavBar from './components/NavBar/NavBar'
import MainLoader from './components/Loaders/MainLoader/MainLoader'

const Words = React.lazy(() => import('./components/Words/Words'))

const App = () => {
    return (
        <>
            <Suspense fallback={<MainLoader />}>
                <NavBar />
                <Words />
            </Suspense>
        </>
    )
}

export default App
