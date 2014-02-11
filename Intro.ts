// You can state that x is a fucntion
// That returns a string.
// If you call x the result will be a string.
function process(x: () => string){
	x().toLowerCase();
}