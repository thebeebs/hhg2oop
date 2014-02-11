// You can define you own types using interfaces
// Thing describes and object literal with an a number property
// and a b string property.
// Even though the process function dosen't return a type
// We have given the compiler enogh information to infer
// that n at the bottom will be of type number.
interface Thing {
	a: number;
	b: string;
	c: boolean;
}

function process(x: Thing){
	return x.a;
}

var n = process({a: 10, b:'Beeby'});
n.toFixed(0.0);