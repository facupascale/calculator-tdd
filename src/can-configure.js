const canConfigure = (from, to) => {
  if (typeof from !== 'string' || typeof to !== 'string') {
    throw new Error('from or to parameter must be a string')
  }

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformation = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformation[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false
    transformation[fromLetter] = toLetter
  }

  return !(from.length !== to.length)
}

export { canConfigure }
