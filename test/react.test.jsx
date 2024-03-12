import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { Calculator, numbers, operations } from '../src/calculator'

describe('calculator', () => {
  afterEach(cleanup) // <== limpiamos el DOM después de cada test

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render a title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('should render 4 row', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')

    expect(rows.length).toBe(4)
  })

  it('should render operations', () => {
    render(<Calculator />)
    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })

  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })

  it('should user input after clicking a number', () => {
    render(<Calculator />)
    const input = screen.getByRole('textbox')
    const number = screen.getByText('1')

    fireEvent.click(number)

    expect(input.value).toBe('1')
  })

  it('should user input after clicking several numbers', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const tree = screen.getByText('3')
    fireEvent.click(tree)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+2')
  })

  it('should calculate based on user input and show the calculation', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const equal = screen.getByText('=')
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('3')
  })
})
