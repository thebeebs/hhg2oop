// You can model constructors 
// You can model what happen when someone indexes the thing
// telling TypeScript to return a date.
interface Thing {
	a: number;
	b: string;
	foo: {
		(x: string): string;
		(x: number): number;
		data: any;
	};
	new (s: string): Element;
	[index: number]: Date;
}

function process(x: Thing){
	 var date = x[0].getDate();
	 var el = new x("blah").clientWidth;
	return date;
}