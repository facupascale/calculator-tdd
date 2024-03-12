import { describe, expect, it } from 'vitest'

import { canConfigure } from '../src/can-configure'

describe('can-configure', () => {
  // ya esta cubierto por la generalidd en los demas test
  //   it('should be a function', () => {
  //     expect(canConfigure).toBeTypeOf('function')
  //   })

  // cubierto en el siguiente test
  //   it('should thrwow if first parameter is missing', () => {
  //     expect(() => canConfigure()).toThrow()
  //   })

  it('should throw if first parameter is not a string or is missing', () => {
    expect(() => canConfigure()).toThrowError()
    expect(() => canConfigure(1)).toThrowError()
  })

  it('should throw if second parameter is not a string or is missing', () => {
    expect(() => canConfigure('a')).toThrowError()
    expect(() => canConfigure('a', 1)).toThrowError()
  })

  it('should return a boolean', () => {
    expect(canConfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if string provide has different length', () => {
    expect(canConfigure('a', 'ab')).toBe(false)
  })

  it('should return false if string provided has different length even with same unique letters', () => {
    expect(canConfigure('ab', 'abc')).toBe(false)
  })

  it('should return false if strings provided has different number of unique letters', () => {
    expect(canConfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if string provided has different order of transformation', () => {
    expect(canConfigure('XBOX', 'XXBO')).toBe(false)
  })
})
