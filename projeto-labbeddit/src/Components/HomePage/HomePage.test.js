import React from 'react'
import {render, wait} from '@testing-library/react'
import HomePage from './HomePage'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect"

describe("renderizacao", () => {
    test("renderizacao frase", () => {
        const {getByText} = render(<HomePage />)
        const frase = getByText("Venha fazer parte da comunidade LabEddit!")

        expect(frase).toBeInTheDocument()
    })
    test("renderizacao formulario de cadastro", () => {
        const {getByText, getByPlaceholderText} = render(<HomePage />)

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

test("funcionalidade de criar usuário", async () => {
    axios.post = jest.fn().mockResolvedValue()
    const {getByPlaceholderText, getByText} = render(<HomePage />)
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