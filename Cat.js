function Cat(){
	this.stomach = [];
}
cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
};

module.export = Cat;