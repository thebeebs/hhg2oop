// You can add an interface to an object
// So the miss spelling of clear() is picked up and the app will not compile.
interface Rapper {
	say(x: string): void;
	clear(): void;
	speak(): string;
}

function makeRapper(): Rapper{
	var words;
	return {
		say: function (x: string){ 
			words = x;
			},
		clearSpeltWrong: function (){ 
			words = '';
			},
		speak: function(){
			return words;
		}
	};
}

makeRapper();