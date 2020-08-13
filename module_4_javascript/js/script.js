// // function compare (x, y) {
// // 	return x > y;
// // }                            				//lecture41_1
// // var a = compare(4,5);
// // console.log(a);
// // console.log(compare(4, "a"));
// // compare();
// --------------------------------------	


// var message = "in global";
// console.log("global: massage = " + message);  //lecture41_2
// var a = function() {
// 	var message = "inside a";						
// 	console.log("a: message = " + message)
// 	b();
// }
// function b() {
// 	console.log("b: message = " + message)
// }
// a();
// --------------------------------------	


// var x;
// console.log(x);
// x = 5;
// if(x == undefined) {
// 	console.log("x is undefined");                 //lecture42_2
// } else {
// 	console.log("x has been defined");
// }
// --------------------------------------	


// var string = "Hello";
// string += " World ";
// console.log(string += "!");
// ***********Math************
// console.log(( 5 + 4 ) / 3);
// console.log(undefined/5);
// function test1(a) {
// 	console.log ( a / 5);
// }
// test1();
// *******Equality*********
// var x = 4, y = 4;
// if(x == y) {
// 	console.log("x is equal to y");
// } 
// x = "4";
// if(x == y) {								//lecture43_1
// 	console.log("x is equal to y");
// }
// ***********Strict equality*******
// var x = '4', y = 4;
// if (x === y) {
// 	console.log("Strict: x = '4' is equal to y=4");
// } else {
// 	console.log("Strict x = '4' is NOT equal to y = 4");
// }
// ----------------------------------------------------------


// //***if statement all false********
// if (false ||  null || undefined || "" || 0 || NaN) {
// 	console.log("This lint won't ever executed");
// } else {											//lecture43_2
// 	console.log("All false");
// }
// //***if statement all true********
// if(true && "Hello" && 1 && -1 && "false"){
// 	console.log("All true");
// }
// ---------------------------------------------------------


// ***********  Best practise for {} style***********
// function a() 
// {
// 	return
// 	{
// 		name: "Akbarbek"
// 	};
// }
// function b() {
// 	return {
// 		name: "Akbarbek"								//lecture43_3
// 	};
// }
// console.log(a());
// console.log(b());
// var sum = 0;
// for (var i = 0; i < 10; ++i) {
// 	console.log(i);
// 	sum += i;
// }
// console.log("sum of 0 through 9 is: " + sum);
// ----------------------------------------------------------


// //**********Default**************
// function hw (a) {
// 	a = a || "whatever!";
// 	console.log("Hello " + a);						//lecture44
// }
// hw("World")
// hw();
// ----------------------------------------------------------


// ******************Creating an  object ********
// var subject = new Object();
// subject.name = "Physics";
// subject.section = new Object();
// subject.section.firstName = "Nuclear physics";
// subject.section.NumOfTopics = 10;						/lecture45_2
// console.log(subject);
// console.log("Number of topics in the nuclear physics section: "
// + subject.section.NumOfTopics);
// console.log(subject["name"]);
// subject["first lesson time"] = 60;
// console.log("First lesson is: " + subject["first lesson time"]);
// ------------------------------------------------------------------


// **********Object literal syntax*******
// var subject = {
// 	name: "Math",
// 	section:{
// 		firstName: "Trigonometry", 
// 		NumOfTopics: 20
// 	},
// 	firstLesson: "Introduction",
// };
// console.log(subject);
// console.log(subject.section);
// console.log(subject.section.firstName);


// *************function*************
// function exponantiation(exponent) {
// 	function getBase(base) {
// 		var result = 1;
// 		for (var i = 0; i < exponent; i++) {
// 			result *= base
// 		}
// 		return result;							//lecture46
// 	}	
// 	return getBase;
// };
// var getSquare = exponantiation(2)(10);
// var getCube = exponantiation(3)(10);
// var getFourth = exponantiation(4)(10);
// console.log(getSquare);
// console.log(getCube);
// console.log(getFourth);


// *****Function constructors, prototype, "this" keyword
// function test() {
// 	console.log(this);
// 	this.myName = "Akbarbek";
// }
// test();
// console.log(window.myName);
// function Circle(radius) {
// 	this.radius = radius;
// }
// Circle.prototype.getArea
// = function() {
// 	Math.PI * math.pow(this.radius, 2) 			//LECTURE48
// };
// var myCircle = new Circle(10); // creates new object on function
// console.log(myCircle);
// var myOtherCircle = new Circle(30);
// console.log(myOtherCircle);
// ------------------------------------------------


// ******Object literal*************
// var literalCircle = {
// 	radius: 10,
// 	getArea:function() {
// 		var self = this;
// 		var changeRadius = function () {
// 			self.radius = 30							//lecture49
// 		};
// 		changeRadius();
// 		return Math.PI * Math.pow(this.radius, 2); 
// 	}
// };
// console.log(literalCircle.getArea());



// **************Arrays*****************
// var array = new Array();
// array[0] = "Akbarbek";
// array[1] = "Musayev";
// array[2] = 12;
// array[3] = function (name) {
// 	console.log("Hello " + name);
// }
// array[4] = {course: "HTML, CSS & JS"};
// console.log(array);
// console.log(array[1]);
// array[3]("Akbarbek");						//lecture50
// array[3](array[0]);
// console.log(array[4].course);
// *********Short hand array creation**
// var subjects = ["Physics", "Chemistry", "Math"];
// console.log(subjects);
// subjects[20] = "History";
// for (var i = 0; i < subjects.length; i++) {
// 	console.log("Hello " + subjects[i]);
// }


// *************Closures***********
// function makeMultiplier (multiplier) {
// 	return (
// 		function (x) {
// 			return multiplier * x;
// 		}
// 	);
// }
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));
// ---------------------------------------------------

// ***************fake namspace*********************
// AbdulazizGreater.sayhello();
// AkbarbekGreater.sayhi();
// Immediately invoked Function Expression
// IIFE
// (function (name) {
// 	console.log("Hello " + name);
// })("Coursera");


