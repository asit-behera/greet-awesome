import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Jhon Doe')).toBe('Hello Jhon Doe');
});
