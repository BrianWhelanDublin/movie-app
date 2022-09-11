/**
 * randomNumber
 * @param min number
 * @param max number
 * @returns random number
 */
export const randomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Debounce
 */

export const debounce = (func: (args: any) => void, delay: number) => {
	let timerId: ReturnType<typeof setTimeout>;

	return (...args: any) => {
		const boundFunc = func.bind(this, ...args);
		clearTimeout(timerId);
		timerId = setTimeout(boundFunc, delay);
	};
};
