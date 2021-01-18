import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(0,0,0);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  transition: transform 0.3s ease-in-out;
  
    @media (max-width: 576px) {
      width: 100%;
    }

    @media (min-width: 576px) {
        padding-left: 50px;
        max-width: 350px;

    }

    @media (min-width: 768px) {
      display: none;

  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
              <div id='stars' />

        <a href="/portfolio/">
            Home
        </a>
        <a href="/portfolio/about/">
            Sobre Mi
        </a>
        <a href="/portfolio/technologies/">
            Tecnologías
        </a>
        <a href="/portfolio/projects/">
            Proyectos
        </a>
        <a href="/portfolio/contact/">
            Contáctame
        </a>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 30%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: 768px){
      display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: red;
    background: ${({ open }) => open ? '#EFFFFA' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const BurgerMenu = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
        <div>
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
        </div>
    )
}

export default BurgerMenu;