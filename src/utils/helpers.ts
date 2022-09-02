/**
 * randomNumber
 * @param min number
 * @param max number
 * @returns random number
 */
export const randomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
