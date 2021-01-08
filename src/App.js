import React, { Suspense } from 'react'
import NavBar from './NavBar'
import Loader from './Loader'

// const Words = React.lazy(() => import('./Words'))
import Words from './Words'

const App = () => {
    return (
        <>
                <NavBar />
                <Words />
        </>
    )
}

export default App
