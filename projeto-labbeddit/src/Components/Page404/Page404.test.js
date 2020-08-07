import React from 'react'
import {render} from '@testing-library/react'
import Page404 from './Page404'

test("redenrização page 404", () => {
    const {getByText} = render(<Page404 />)

    expect(getByText("Page not Found (404)")).toBeInTheDocument()
})