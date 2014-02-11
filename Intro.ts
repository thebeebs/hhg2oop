// You can have overloads
interface Thing {
	a: number;
	b: string;
	foo(x: string): string;
	foo(x: number): string;
}

function process(x: Thing){
	return x.foo(2)
}