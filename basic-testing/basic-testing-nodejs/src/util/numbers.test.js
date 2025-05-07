import { it, expect } from "vitest";

import { transformToNumber } from "./numbers";

it('should transform a numeric string in a number of type number', () => {
    const numberInput = '3';

    const result = transformToNumber(numberInput);

    expect(result).toBe(+numberInput );
});

it('should return NaN if and invalid numeric string is provided', () => {
    const numberInput = 'invalid';

    const result = transformToNumber(numberInput);

    expect(result).toBeNaN();
})