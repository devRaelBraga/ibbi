import axios from "axios";
import { useState } from "react";
import styled from "styled-components"
import { API_URL } from "./consts";
import { Link } from "react-router-dom";


export default function CadastrarCategoria() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    function submit(e) {
        e.preventDefault();

        axios.post(`${API_URL}/category`, {
            name,
            description,
        }).then((response) => {
            alert('Categoria criada com sucesso!');
        })
    }

    return(
        <Container>
            <Header>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>Home</Link>
                <Link to={'/cadproduto'} style={{textDecoration: 'none', color: 'black'}}>Cadastrar Produto</Link>
            </Header>

            <Body>
                <Form onSubmit={(e) => submit(e)}>
                    <h1>Cadastro de Categoria</h1>

                    <Input placeholder="Nome da Categoria" onChange={(e) => setName(e.target.value)}></Input>
                    <textarea placeholder="Descrição da Categoria" onChange={(e) => setDescription(e.target.value)}></textarea>
                    <SubmitButton>Cadastrar</SubmitButton>
                </Form>
            </Body>
        </Container>
    )
}


const Container = styled.div`
    background-color: #f2f2f2;
    min-height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Header = styled.div`
    background-color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 3rem;
    gap: 2rem;
    box-shadow: 2px 2px 20px 2px #0000004d;
    /* font-size: 1.rem; */
    padding: .5rem 1rem;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    /* background-color: blue; */
    height: 100%;
`

const Form = styled.form`
    width: 30vw;
    min-width: 280px;
    /* height: 60vh; */
    background-color: white;
    border: 1px solid #000000;
    border-radius: 32px;
    box-shadow: 2px 2px 20px 2px #0000004d;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 2rem;

    textarea {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 70%;
        resize: none;
        padding: 1rem;
        border-radius: 10px;
        border: 1px solid #000000;
    }
`

const Input = styled.input`
    width: 70%;
    background-color: white;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 1rem;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    `

const SubmitButton = styled.button`
    width: calc(70% + 2rem + 2px);
    /* align-self: flex-end; */
    /* margin-right: 3vw; */
    background-color: #34a834;
    border: 1px solid #8a8a8a;
    border-radius: 8px;
    padding: 1rem;
    color: white;
    font-weight: 600;

    &:hover {
        cursor: pointer;
    }

`

// const Navigable = styled.