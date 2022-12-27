import { addUpTo1 } from './AddUpTo';

export const addUpTo1Timing = () => {
	const t1 = performance.now();
	addUpTo1(1000000000);
	const t2 = performance.now();
	console.log(`Time Elapsed for addUpTo1: ${(t2 - t1) / 1000} seconds.`);
};
