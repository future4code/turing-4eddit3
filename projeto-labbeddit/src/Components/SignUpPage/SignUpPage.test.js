import React from 'react'
import {render, wait} from '@testing-library/react'
import SignUpPage from './SignUpPage'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect"

describe("renderização da página", () => {
    test("renderização inputs e botao", () => {
        const {getByPlaceholderText, getByText} = render(<SignUpPage />)
        const inputUsuario = getByPlaceholderText(/Usuário/i)
        const inputEmail = getByPlaceholderText(/Email/i)
        const inputSenha = getByPlaceholderText(/Senha/i)
        const botaoCadastrar = getByText(/Cadastrar/i)

        expect(inputUsuario).toBeInTheDocument()
        expect(inputEmail).toBeInTheDocument()
        expect(inputSenha).toBeInTheDocument()
        expect(botaoCadastrar).toBeInTheDocument()
    })
})

test("teste cadastro API", async () => {
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByText} = render(<SignUpPage />)
    const inputUsuario = getByPlaceholderText(/Usuário/i)
    const inputEmail = getByPlaceholderText(/Email/i)
    const inputSenha = getByPlaceholderText(/Senha/i)
    const botaoCadastrar = getByText(/Cadastrar/i)

    await wait (() => {userEvent.type(inputUsuario, "diego-turing")})
    await wait (() => {userEvent.type(inputEmail, "diego@gmail.com")})
    await wait (() => {userEvent.type(inputSenha, "123456")})
    userEvent.click(botaoCadastrar)

    expect(axios.post).toHaveBeenCalled()
})