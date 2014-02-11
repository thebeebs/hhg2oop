// This file shows a very simple but commmon problem
// the on mouse over function is using the wrong this.
class Tracker{
	count = 0;
	start(){
		window.onmouseover = e => {
			this.count++;
			console.log(this.count);
		};
	}
}

var t = new Tracker();
t.start();