import { useState } from 'react'
import { evaluate } from 'mathjs'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]
const operations = ['+', '-', 'x', '/']
const equalSign = '='

const Calculator = () => {
  const [value, setValue] = useState('')

  const createdHandleClick = op => () => {
    setValue(value.concat(op))
  }
  return (
    <div>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, idx) => (
          <div key={idx} role='row'>
            {row.map(number => (
              <button onClick={createdHandleClick(number)} key={number}>
                {number}
              </button>
            ))}
          </div>
        ))}
        {operations.map(operation => (
          <button onClick={createdHandleClick(operation)} key={operation}>
            {operation}
          </button>
        ))}
        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>
    </div>
  )
}

export { numbers, operations, equalSign, Calculator }
