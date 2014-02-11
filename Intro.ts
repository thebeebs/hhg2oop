// If I annotate xas a string things start to light up
// In sublime you will nottice errors being thrown
// Here it is saying that a string can't have a name property
function(x : string){
	x.name = "foo";
	var v = x + x;
	alert(v);
}