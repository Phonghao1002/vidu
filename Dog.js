var chalk = require('chalk');
function Dog(name){
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eat = function(mouse){
	this.stomach.push(mouse);
};

Dog.prototype.sayHi = function(){
	console.log('Hi! I am a dog. My name is ' + chalk.blue(this.name));
};
module.exports = Dog;