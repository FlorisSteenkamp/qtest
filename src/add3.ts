import { add } from "./add.js";


function add3(a: number, b: number, c: number): number {
	return add(add(a,b), c);
}


export { add3 }
