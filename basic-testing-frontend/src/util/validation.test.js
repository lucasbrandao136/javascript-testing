import { it, expect } from 'vitest'

import { validateStringNotEmpty, validateNumber } from './validation'

it('should throw an error if the argument is an empty string', () => {
    const stringInput = '';

    const resultFn = () => { validateStringNotEmpty(stringInput) };

    expect(resultFn).toThrow();
})

it.each([
    { description: 'empty object', input: {} },
    { description: 'null', input: null },
    { description: 'undefined', input: undefined },
    { description: 'boolean false', input: false },
    { description: 'empty array', input: [] },
  ])('should throw error when input is not a string ($description)', ({ input }) => {

    const resultFn = () => validateNumber(input);
    

    expect(resultFn).toThrow();
  });

it('should not throw an error if a valid string is sent', () => {
    const stringInput = 'valid';

    const resultFn = () => {
        validateStringNotEmpty(stringInput);
    }

    expect(resultFn).not.toThrow();
})

it.each([
    { description: 'empty object', input: {} },
    { description: 'empty string', input: '' },
    { description: 'null', input: null },
    { description: 'undefined', input: undefined },
    { description: 'boolean false', input: false },
    { description: 'empty array', input: [] },
  ])('should throw error when input is NaN  ($description)', ({ input }) => {

    const resultFn = () => validateNumber(input);

    expect(resultFn).toThrow();
  });

