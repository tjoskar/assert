import {test, expect} from 'vitest';
import {is, isNot} from './index.js';

test('true is true', () => {
	expect(() => is(true, true)).not.toThrow();
});

test('false is false', () => {
	expect(() => is(false, false)).not.toThrow();
});

test('Throw an error for comparing false and true', () => {
	expect(() => is(true, false)).toThrow('true is not equal to false');
});

test('true is not false', () => {
	expect(() => isNot(true, false)).not.toThrow();
});

test('Throw an error for comparing false and false', () => {
	expect(() => isNot(false, false)).toThrow('false is equal to false');
});
