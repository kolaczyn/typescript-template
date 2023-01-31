import { greeter } from './greeter'

test('greets hello world', () => {
  expect(greeter('world')).toBe('Hello world!')
})

test('greet Paweł', () => {
  const lol = 21
  expect(greeter('Paweł')).toBe('Hello Paweł!')
})
