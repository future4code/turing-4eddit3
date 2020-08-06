import React from 'react'
import {render, getAllByText} from '@testing-library/react'
import Header from './Header'

describe("Renderização botões e título", () => {
    test("renderização botões", () => {
        const {getByText} = render(<Header />)
        const botaoHome = getByText(/Home/)
        const botaoLogin = getByText(/Login/)
        const tituloPagina = getByText(/LabEddit/i)

        expect(botaoHome).toBeInTheDocument()
        expect(botaoLogin).toBeInTheDocument()
        expect(tituloPagina).toBeInTheDocument()
    })
})