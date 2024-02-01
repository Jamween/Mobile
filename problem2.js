//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//string
var text = "Welcome";
console.log("Value assigned to text is: " + text);
//number
var num = 10;
console.log("Value assigned to num is: " + num);
//array
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log("Value assigned to myArray is: " + (i + 1) + " is " + myArray[i]);
}
var myArray2 = [1, 2, 3];
myArray2.forEach(function (item) {
    console.log("The value is: " + item);
});
var unknown = "Whatever we want";
console.log("The value of unknown is: " + unknown);
