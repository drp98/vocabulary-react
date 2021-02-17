import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Words from './components/Words/Words'

// import MainLoader from './components/Loaders/MainLoader/MainLoader'
// const Words = React.lazy(() => import('./components/Words/Words'))

const App = () => {
    return (
        <Router>
            <NavBar />
            <Route path='/' component={Words} />
        </Router>
    )
}

export default App
