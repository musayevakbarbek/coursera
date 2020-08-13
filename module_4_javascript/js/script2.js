(function (window) {
	var AkbarbekGreater = {};
	AkbarbekGreater.name = "Akbarbek";
	var greeting = "Hi ";
	AkbarbekGreater.sayhi = function () {
		console.log(greeting + AkbarbekGreater.name);
	}
	window.AkbarbekGreater = AkbarbekGreater;
})(window);