import { addUpTo2 } from './AddUpTo';

export const addUpTo2Timing = () => {
	const t1 = performance.now();
	addUpTo2(1000000000);
	const t2 = performance.now();
	console.log(`Time Elapsed for addUpTo2: ${(t2 - t1) / 1000} seconds.`);
};
