import { greeter } from './greeter'

describe('greeter', () => {
  it('greets hello world', () => {
    expect(greeter('world')).toBe('Hello world!')
  })
})
