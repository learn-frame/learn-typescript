import { Dog } from '../src/Classes/Dog'

test('', () => {
  const dog = new Dog('wangwang', 18, 'female')
  expect(dog).toBeInstanceOf(Dog)
})
