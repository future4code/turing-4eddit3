import React from 'react'
import {render, getAllByText} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

// test("teste", () => {
//     jest.mock('react-router-dom', () => ({
//         useHistory: () => ({
//           push: jest.fn(),
//         }),
//       }));
    
//     const {getByText} = render(<Header />)
//     const botaoHome = getByText(/Home/)

//       userEvent.click(botaoHome)

//       expect(history.push("/")).toHaveBeenCalled()
// })