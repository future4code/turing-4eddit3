import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("", () => {
  const {getByText} = render(<App />)

  expect(getByText(/Venha fazer parte/i)).toBeInTheDocument()
})
