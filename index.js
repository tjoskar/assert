const equal = (a, b) => a === b;

export function is(value, expected, message) {
	if (!equal(value, expected)) {
		throw new Error(message ? message : `${value} is not equal to ${expected}`);
	}
}

export function isNot(value, expected, message) {
	if (equal(value, expected)) {
		throw new Error(message ? message : `${value} is equal to ${expected}`);
	}
}
