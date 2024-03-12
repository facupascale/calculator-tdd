import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // este test lo hemos desactivo posteriormente porque es redundante
  // it('should a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrowError('parameter provided must be a number')
  })

  it('should throw a specific error not number is provided', () => {
    expect(() => fizzbuzz()).toThrowError('parameter provided must be a number')
  })

  it('should return 1 if number provider is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provider is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return fizz if number provider is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return fizz if number provider is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
    expect(fizzbuzz(18)).toBe('fizz')
  })

  it('should return fizz if number provider is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return fizzbuzz if number provider is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
  })
})
