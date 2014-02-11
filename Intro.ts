// An ordinary function in JavaScript.
// This look odd. We are putting a property on x
// and then trying to add it. TypeScript in this
// instance will assume that 
function(x){
	x.name = "foo";
	var v = x + x;
	alert(v);
}