import { render, screen, logRoles, fireEvent } from '@testing-library/react';
import App from './App';


test('button click  flow', () => {


  render(<App />)

  // logRoles(container)


  //get button
  const buttonElement = screen.getByRole('button', { name: /blue/i })


  //check inital color
  expect(buttonElement).toHaveClass('red')

  //button click
  fireEvent.click(buttonElement)

  //expect change
  expect(buttonElement).toHaveTextContent(/red/i)

  expect(buttonElement).toHaveClass('blue')
}

)



test('check flow', () => {
  render(<App />)
})