import React, { useState } from 'react';
import styled from 'styled-components'
import Links from './Links';
import {Bounce,Fade} from 'react-reveal/';
import BurgerMenu from './BurgerMenu';

const Navbar = styled.header`
    display: flex;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #312c51;
    justify-content: space-evenly;
    align-items: center;
    z-index: 100;
    background-color: transparent;
    color: transparent;
    transition: all .2s;
    @media (max-width: 768px){
        justify-content: center;
        padding-right: 10px;

    }
`
const Logo = styled.h1`
    width: 30%;
    color: #f0c38e;
`

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
    /* background-color: red; */
    @media (max-width: 768px){
        display: none;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: white;
    font-size: 17px;
    font-weight: 600;
    transition: all .2s;
    :hover{
        color: #f0c38e;
        transition: all .2s;
    }
`

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)    

    return ( 
        <Navbar className={(navbar) ? "navbarActive" : "navbar"}>
            <Fade top> 
                <Logo>
                    Portfolio
                </Logo>
            </Fade>
            <Nav>
                <Fade top>
                    <Link href="/"> Home </Link>
                </Fade>
                <Fade top>
                    <Link href="/about"> Sobre mi </Link>
                </Fade>
                <Fade top>
                    <Link href="/technologies"> Tecnologías </Link>
                </Fade>
                <Fade top>
                    <Link href="#"> Proyectos </Link>
                </Fade>
                <Fade top>
                    <Link href="#"> Contáctame </Link>
                </Fade>
            </Nav> 

            <BurgerMenu />
        </Navbar>
    );
}
 
export default Header;