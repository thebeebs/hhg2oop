// You can state that x is a fucntion
// You can describe the shape of an object
// so in this instance a will have a string propert called
// a and a b property of type number
interface Thing {
	a: number;
	b: string;
}

function process(x: Thing){
	return x.b.length;
}