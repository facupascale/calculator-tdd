/*
escribir una funcion que al pasarle un numero:
    -muestra fizz si es multiplo  de 3
    -muestra buzz si es multiplo de 5
    -muestra fizzbuzz si es multiplo de 3 y 5
    -muestra el numero si no es multiplo de 3 ni de 5
*/

const fizzbuzz = number => {
  if (typeof number !== 'number') {
    throw new Error('parameter provided must be a number')
  }
  if (Number.isNaN(number)) {
    throw new Error('parameter provided must be a number')
  }

  const multiples = {
    3: 'fizz',
    5: 'buzz'
  }

  let output = ''

  Object.entries(multiples).forEach(([multiple, word]) => {
    if (number % multiple === 0) output += word
  })

  return output || number
}

export { fizzbuzz }
