import { describe, it, expect } from 'vitest';
import { Calculator } from '../src/application/Calculator';

// npm install --save-dev vitest typescript && npm run test

describe('Calculator', () => {
    const calculator = new Calculator();

    it('should compute basic expressions correctly', () => {
        expect(calculator.compute("2+2*4")).toBe(10);
        expect(calculator.compute("(2+2)4")).toBe(16);
        expect(calculator.compute("2 + 4 * 10 ^ 2 / 16 - 3")).toBe(24);
    });

    it('should compute expressions with parentheses', () => {
        expect(calculator.compute("(2 + 1) * (8 / 2) / (18 * 2)")).toBeCloseTo(0.333, 2);
        expect(calculator.compute("(2 + (4 - 3)) * (10 / 5)")).toBe(6);
    });

    it('should compute complex expressions correctly', () => {
        expect(calculator.compute("((15 * 2^3 - (48 / 6 + 2^2)) * 3) / ((100 / 25 * 3) + (7^2 - 40))")).toBeCloseTo(15.428, 2);
        expect(calculator.compute("(((3 + 5) * (2 - 1)) + ((6 / 2) ^ 2)) * (4 + 1)")).toBe(85);
        expect(calculator.compute("(((((1 + 2) * 3) + 4) * (5 + (6 - 2))) ^ 2)")).toBe(13689);
    });

    it('should compute exponentiation right', () => {
        expect(calculator.compute("((2^3^2) + ((4 + 1) * (6 - 2))) / ((7 + 3) * (2 + 2))")).toBeCloseTo(13.3, 1);
        expect(calculator.compute("2^3^2")).toBe(512);
    });

    it('should compute nested sums and products', () => {
        expect(calculator.compute("((((1 + 2) + 3) + 4) + 5) * (((6 * 7) * 8) * 9)")).toBe(45360);
        expect(calculator.compute("(((((10 - 2)^2) + ((3 + 1)^3)) * ((8 / 4)^2)))")).toBe(512);
        expect(calculator.compute("(((((1+2)*(3+4))-((5+6)*(7+8)))+((9+10)*(11+12)))^2)")).toBe(85849);
    });
});