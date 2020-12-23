import React from 'react'
import { Navbar, Nav, ButtonGroup, Button } from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
            <Navbar bg='primary' variant='dark'>
                <Navbar.Brand href='#home'>Vocabulary</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='#home'>Test</Nav.Link>
                    <Nav.Link href='#features'>Add word</Nav.Link>
                </Nav>

                <Nav inline='true'>
                    {/* <ButtonGroup>
                        <Button>Login</Button>
                        <Button>Register</Button>
                    </ButtonGroup> */}
                    <Button>Log out</Button>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar
