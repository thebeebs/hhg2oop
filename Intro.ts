// You can have overloads
interface Thing {
	a: number;
	b: string;
	foo: {
		(x: string): string;
		(x: number): number;
		data: any;
	};
}

function process(x: Thing){
	return x.foo(2)
}