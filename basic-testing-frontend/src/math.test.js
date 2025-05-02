import { it, expect } from 'vitest'

import { add } from './math'

it('should summariza all number values in an array', (() => {
    // Arrange
    const numbers = [1, 2, 3];

    // Act
    const result = add(numbers);

    // Arrange
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
    expect(result).toBe(expectedResult);
}));

it('should yield Nan if a least one invalid number is provided', () => {
    const inputs = ['Invalid', 1]

    const result = add(inputs);

    expect(result).toBeNaN();
});


it('should yield a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2'];

    const result = add(numbers);

    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
    expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});


it('should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
        add();
    }
    expect(resultFn).toThrow(/is not iterable/);
});

it('should throw an error if provided with multiple arguments intead of an array', () => {
    const a = 1;
    const b = 2;


    const resultfn = () => {
        add(a, b);
    }

    expect(resultfn).toThrow(/is not iterable/);
});