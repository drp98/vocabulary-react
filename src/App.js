import React from 'react'
import NavBar from './NavBar'
import Word from './Word'

import { Button, ButtonGroup } from 'react-bootstrap'

const App = () => {
    return (
        <>
            <NavBar />
            <Word />

            <div className='text-center col p-0'>
                <Button variant='outline-primary' className='w-50 mb-2'>Translate</Button><br />
                <ButtonGroup className='text-center w-50'>
                    <Button variant='outline-primary'>Back</Button>
                    <Button variant='outline-primary'>Next</Button>
                </ButtonGroup>
            </div>
        </>
    )
}

export default App
