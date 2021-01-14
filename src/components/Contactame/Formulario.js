import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: auto;
`

const Input = styled.input`
    all: unset;
    padding: 8px;
    border-radius: 5px;
    width: 90%;
    text-align: start;
    color: black;
    font-size: 20px;
    font-weight: 700;
`

const ContainerInput = styled.div`
    width: 90%;
    max-width: 370px;
    background: white;
    margin: 10px;
    border-radius: 20px;
`

const Mensaje = styled.textarea`
    width: 90%;
    max-width: 350px;
    height: 100px;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background: white;
    font-size: 20px;
    font-size: 20px;
    font-weight: 700;
`

const ButtonSend = styled.input`
    all: unset;
    background: green;
    padding: 15px 30px;
    color: white;
    transition: all .2s;
    :active{
        transform: scale(.8);
        transition: transform .2s;
    }

`

const Formulario = () => {
    return ( 
        <Form>
            <ContainerInput>
                <Input type="text" placeholder="Nombre" required autoFocus/>
            </ContainerInput>
            <ContainerInput>
                <Input type="text" placeholder="Apellido" required/>
            </ContainerInput>
            <ContainerInput>
                <Input type="email" placeholder="Email" required/>
            </ContainerInput>
            <Mensaje type="text" placeholder="Mensaje"  rows="4" cols="30" maxlength="300"/>
            <ButtonSend type="submit"/>
        </Form>
    );
}
 
export default Formulario;