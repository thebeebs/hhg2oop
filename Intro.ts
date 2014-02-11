// You can make c optional by postfixing it with a question mark.
// This means it's still there but it is not required.
// If you do try and pass C it must be of type boolean
// There for the param is optional however the tyoe is not.
interface Thing {
	a: number;
	b: string;
	c?: boolean;
}

function process(x: Thing){
	return x.a;
}

var n = process({a: 10, b:'Beeby', c:'fail'});
n.toFixed(0.0);