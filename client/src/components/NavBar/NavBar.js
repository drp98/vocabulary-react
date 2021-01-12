import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
// import { elastic as Menu } from 'react-burger-menu'

const NavBar = () => {
    // const showSettings = e => {
    //     e.preventDefault()
    // }
    return (
        <>
            <Navbar bg='primary' variant='dark'>
                <Navbar.Brand href='#home'>Vocabulary</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='#home'>Test</Nav.Link>
                    <Nav.Link href='#features'>Add word</Nav.Link>
                </Nav>

                <Nav inline='true'>
                    <Button>Log out</Button>
                </Nav>
            </Navbar>
            {/* <Menu pageWrapId={'width'}>
                <a id='home' className='menu-item' href='/'>
                    Home
                </a>
                <a id='about' className='menu-item' href='/about'>
                    About
                </a>
                <a id='contact' className='menu-item' href='/contact'>
                    Contact
                </a>
                <a onClick={showSettings} className='menu-item--small' href=''>
                    Settings
                </a>
            </Menu> */}
        </>
    )
}

export default NavBar
