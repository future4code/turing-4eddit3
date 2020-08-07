import React from 'react';
import { render, wait } from '@testing-library/react';
import LoginPage from './LoginPage';
import { useHistory } from 'react-router'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect"
import Axios from 'axios';

describe("renderização da página", () => {
    test("renderizacao input" , () => {
        const {getByPlaceholderText} = render(<LoginPage />)

        const inputEmail = getByPlaceholderText(/email/)
        const inputSenha = getByPlaceholderText(/senha/)

        expect(inputEmail).toBeInTheDocument()
        expect(inputSenha).toBeInTheDocument()
    })
})

describe("teste API", () => {
    test("teste login", async () => {
        Axios.post = jest.fn().mockResolvedValue()
        const {getByPlaceholderText, getByText} = render(<LoginPage />)
        const inputEmail = getByPlaceholderText(/email/)
        const inputSenha = getByPlaceholderText(/senha/)
        const botaoLogin = getByText(/login/)

        await wait (() => {userEvent.type(inputEmail, "diego@gmail.com")})
        await wait (() => {userEvent.type(inputSenha, "123456")})
        userEvent.click(botaoLogin)

        expect(Axios.post).toHaveBeenCalled()
    })
})

// test("ir para pagina de cadastro", () => {
//     const history = createMemoryHistory()
//     history.push("/cadastro")
//     const {getByText} = render(<LoginPage />)

//     expect(getByText(/Cadastro/)).toBeInTheDocument()
// })