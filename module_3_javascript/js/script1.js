(function (window) {
	var AbdulazizGreater = {};
	AbdulazizGreater.name = "Abdulaziz";
	var greeting = "Hello ";
	AbdulazizGreater.sayhello = function () {
		console.log(greeting + AbdulazizGreater.name);
	}
	window.AbdulazizGreater = AbdulazizGreater;
})(window);