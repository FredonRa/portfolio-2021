import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: auto;
    height: 100vh;
    position: relative;
`

const ArrowUp = styled.div`
    position: relative;
    right: -70%;
    top: 60px;
    width: 100px;
    height: 100px;
    background-color: red;
`

const ArrowDown = styled.div`
    position: relative;
    right: -70%;
    bottom: 270px;
    width: 100px;
    height: 100px;
    background-color: red;
`

const ArrowsLinks = () => {
    return ( <>
            <ArrowUp /> 
            <ArrowDown />
            </>
    );
}
 
export default ArrowsLinks;