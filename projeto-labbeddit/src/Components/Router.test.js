import React from 'react';
import { render } from '@testing-library/react';
import Router from './Router';
import { createMemoryHistory } from 'history'

describe("Renderização das páginas", () => {
    test("Home", () => {
        const history = createMemoryHistory()
        const {container} = render(<Router />)

        expect(container.innerHTML).toMatch(/Venha fazer parte da comunidade LabEddit!/)
    })
    
})