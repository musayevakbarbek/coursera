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
//***********Math************
// console.log(( 5 + 4 ) / 3);
// console.log(undefined/5);
// function test1(a) {
// 	console.log ( a / 5);
// }
// test1();
//*******Equality*********
// var x = 4, y = 4;
// if(x == y) {
// 	console.log("x is equal to y");
// } 
// x = "4";
// if(x == y) {								//lecture43_1
// 	console.log("x is equal to y");
// }
//***********Strict equality*******
// var x = '4', y = 4;
// if (x === y) {
// 	console.log("Strict: x = '4' is equal to y=4");
// } else {
// 	console.log("Strict x = '4' is NOT equal to y = 4");
// }
//----------------------------------------------------------


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
//---------------------------------------------------------


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
//----------------------------------------------------------


// //**********Default**************
// function hw (a) {
// 	a = a || "whatever!";
// 	console.log("Hello " + a);						//lecture44
// }
// hw("World")
// hw();

