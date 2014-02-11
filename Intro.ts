// Functions can have optional parameters too
interface Thing {
	a: number;
	b: string;
	foo(x: string, n?: number): string;
}

function process(x: Thing){
	return x.foo("string");
}