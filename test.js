import test from 'ava'
import fill from './'

const indexPlus = index => index + 1

const fizzBuzz = index => (++index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index

const comprehensive = (index, length, partial) => partial.indexOf(index) === -1 ? index + 1 : length

test(t => {
  t.deepEqual(fill('a', 0), [])
  t.deepEqual(fill('a', 1), ['a'])
  t.deepEqual(fill('a', 2), ['a', 'a'])
  t.deepEqual(fill('a', 5), ['a', 'a', 'a', 'a', 'a'])
  t.deepEqual(fill('foo', 2), ['foo', 'foo'])
  t.deepEqual(fill(0, 2), [0, 0])
  t.deepEqual(fill(indexPlus, 5), [1, 2, 3, 4, 5])
  t.deepEqual(
    fill(fizzBuzz, 15),
		[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
  )
  t.deepEqual(fill(comprehensive, 5), [1, 5, 3, 5, 5])
})
