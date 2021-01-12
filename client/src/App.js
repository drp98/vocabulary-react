import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Words from './components/Words/Words'

// import MainLoader from './components/Loaders/MainLoader/MainLoader'
// const Words = React.lazy(() => import('./components/Words/Words'))

const App = () => {
    return (
        <>
            <NavBar />
            <Words />
        </>
    )
}

export default App
