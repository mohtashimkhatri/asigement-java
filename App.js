// ****************Q1**********************************
// var A = [];
// ****************Q2**********************************
// var arr =["Apple"]
// *******************Q3**********************************
// var num = ["2" , "5" , "8"]
// console.log(num)
// ****************Q4**********************************
// var Arr = ["Apple" ,"Orange", "Mango" ]
// console.log(Arr)
// ****************Q2**********************************
// var Arrmixed = ["Apple" ,"Orange", "Mango",  "2" , "5" , "8","Ubaidraza" ]
// console.log(Arrmixed)
// ****************Q5**********************************


// ****************Q6**********************************



// ****************Q7**********************************




// ****************Q8**********************************


// ****************Q9**********************************



// ****************Q10**********************************

// for(var i =1; i <=10; i++){
//     document.write(i +"<br>")
// }
// for(var p =10; p >=1; p--){
//     document.write(p+ "<br>" )
// }
// ****************Q11**********************************
// var arr = ["This,  is ,  my ,  cat"];
// console.log(arr)
// ****************Q12**********************************
// var arr = ["apple", "mango", "grapes", "banana", "orange"];

// document.write(
//   "<select>" +
//     "<option>" +
//     arr[0] +
//     "</option>" +
//     "<option>" +
//     arr[1] +
//     "</option>" +
//     "<option>" +
//     arr[2] +
//     "</option>" +
//     "<option>" +
//     arr[3] +
//     "</option>" +
//     "<option>" +
//     arr[4] +
//     "</option>" +
//     "</select>"
// );
// ****************Q13**********************************
// var targetValue = +prompt("Enter targetValue Value");

// var deleteValue = +prompt("Enter deleteValue Value");

// var addingElement = prompt("Enter addingElement Value");
// arr.splice(targetValue, deleteValue, addingElement);






var arr = ["dog", "cat", "lizard", "tiger", "lion"];
var startingValue = +prompt("Enter starting Value");

var EndingValue = +prompt("Enter Ending Value");

var copy = arr.slice(startingValue, EndingValue);

console.log("Original array: ", arr);
console.log("Updated Array: ", copy);
