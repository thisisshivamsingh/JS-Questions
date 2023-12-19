//debouncoing in

let counter = 0;

const getData = (args) => {
  //calls an api and gets data

  console.log("Fetching ....", counter++);
};

// const debounce = function (fn, delay) {
//   let timer;

//   return function () {
//     let context = this,
//       args = arguments;
//     console.log("<<context>>", context);
//     console.log("<<args>>", args);
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(context, arguments);
//     }, delay);
//   };
// };

// "use strict";
// function helloShivam() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(helloShivam());

const debounce = (func, timeout = 300) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, timeout);
  };
};

const betterFunction = debounce(getData, 300);

/////////////////////////////////////////////////////////////////////////////////////

// function removeMultipleSpace(str) {
//   return str
//     .trim()
//     .split(" ")
//     .filter((elem, indx) => {
//       if (elem) {
//         return elem;
//       }
//     })
//     .join(" ");
// }

// console.log(
//   removeMultipleSpace("   the         h                 name  ds             ")
// );

// let readyArr = [1, 3, 4, 6, 4, 6, 3, 565, 3, 5, 6, 3];

// let newArr = readyArr.filter((elem, index) => elem < 4);

// console.log("<<<newArr>>>", newArr);

// function removeMultipleSpace(str) {
//   let newStr = "";
//   let toggler = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       if (toggler === 0) {
//         newStr += ` ${str[i]}`;
//       } else if (toggler === 1) {
//         newStr += str[i];
//       }
//       toggler = 1;
//     } else if (str[i] === " ") {
//       toggler = 0;
//     }
//   }
//   return newStr;
// }

// console.log(removeMultipleSpace("    the   is           my name       "));

// function removeMultipleSpace(str) {
// let str = "   the  is   shivam   ";
// let spaceNo = 0;
// let counter = 0;
// // let nonSpaceNo = 0;
// for (let j = 0; j < str.length; j++) {
//   console.log("<<j>>", j, "str[j]", str[j]);
//   if (str[j] === " ") {
//     console.log("hello");
//     spaceNo++;
//   } else if (str[j]) {
//     for (let i = 0; i < spaceNo; i++) {
//       console.log("str[i]", str[i], "str[j]", str[j + i]);
//       str[i] = str[j + i];
//       counter++;
//     }
//     console.log(counter, "<<<>>>");
//     j = j + counter - 1;
//     spaceNo = 0;
//     // counter = 0;

//     console.log(str, "--------");
//   }
//   console.log(str, "--------");
// }
// console.log("****", str);
// // }

// console.log(removeMultipleSpace("    the   is           my name       "));

// function findingSecondHighest(arr) {
//   let a = 0;
//   let b = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (b < arr[i]) {
//       a = b;
//       b = arr[i];
//     } else if (a < arr[i]) {
//       a = arr[i];
//     }
//   }
//   console.log("a", a, "b", b);
//   return a;
// }
// const answer = findingSecondHighest([8, 5, 4, 7, 5, 74, 5, 25, 8, 10, 15]);
// console.log("------", answer);

///////////////

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// const sum = (a, b = 0) => {
//   if (a && b) {
//     return a + b;
//   } else {
//     return (c) => {
//       return a + c;
//     };
//   }
// };

// console.log(sum(2)(3));

//////////////////////////

// const returnStr = (str, pos) => {
//   const charCount = {};
//   for (let i = 0; i < str.length; i++) {
//     if (charCount[str[i]] >= 1) {
//       charCount[str[i]]++;
//     } else {
//       charCount[str[i]] = 1;
//     }
//   }
//   let j = 1;
//   if (charCount.key === 1) {
//     if (j === pos) {
//       return key;
//     }
//     j++;
//   }
//   let newCharArr = [];
//   for (const [key, value] of Object.entries(charCount)) {
//     if (value === 1) {
//       newCharArr.push(key);
//     }
//   }
//   return newCharArr[pos - 1];
// };

// const abc = () => {
//   return "ehllo";
// };

// console.log(returnStr("titfortat", 1));
// const ownArr = [1, 2];
// const user = {
//   1: "hello",
//   name: "shivam",
//   [ownArr]: "4",
//   [abc]: 50,
//   [Symbol("foo")]: "hello",
// };

// console.log(user, "<<<>>");

// const filteredArray = (arr, num) => {
//   // let counter;
//   let resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (num === arr[i][j]) {
//         counter = true;
//       }
//     }
//     if (!counter) {
//       resultArr[resultArr.length] = arr[i];
//     }
//     counter = false;
//     // if (!arr[i].includes(num)) {
//     //   resultArr.push(arr[i]);
//     // }
//   }
//   return resultArr;
// };

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 4],
//       [2, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );

// // filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3);

// console.log(
//   [2, 6, 3, 5, 63, 5, 6, 3, 55, 63, 55, 3, 6, 5, 63].sort((a, b) => b - a)
// );

// const add =
//   (...a) =>
//   (...b) =>
//   (...c) =>
//   () => {
//     let numArr = [...a, ...b, ...c];
//     let acc = 0;

//     for (let i = 0; i < numArr.length; i++) {
//       acc += numArr[i];
//     }
//     return acc;
//   };

// console.log(add(1, 2)(3, 4)(5, 6)());

// const findAlpha = (word, str) => {
//   const wordArr = word.split("");
//   const strArr = str.split("");

//   let counter = false;
//   let index;
//   let j = 0;

//   for (let i = 0; i < wordArr.length; i++) {
//     if (j < strArr.length) {
//       if (strArr[j] == wordArr[i]) {
//         if (!counter) {
//           index = i;
//           counter = true;
//         }
//         if (j == strArr.length - 1) {
//           return index;
//         }
//         j++;
//       } else {
//         index = 0;
//         counter = false;
//       }
//     }
//   }
// };

// console.log(findAlpha("Hello", "lo"));
// const { a: x = 10, b: y = 20 } = { a: 30 };

// console.log(x, y);

// let arr1 = [
//   1,
//   2,
//   3,
//   [8, 6, 9],
//   [6, [5, 6, [8, 6], [5, [8, 3, [8, 3]]]], 5, [7, 8, 6], 4],
// ].toString();

// console.log(arr1.split(","));
// let arrResult = [];

// function flatArr(nestArr) {
//   for (let j = 0; j < nestArr.length; j++) {
//     if (!Array.isArray(nestArr[j])) {
//       arrResult.push(nestArr[j]);
//     } else {
//       flatArr(nestArr[j]);
//     }
//   }
//   return arrResult;
// }
// console.log(flatArr(arr1));
// for (let i = 0; i < arr1.length; i++) {
//   if (!Array.isArray(arr1[i])) {
//     arrResult.push(arr1[i]);
//   } else {
//     flatArr(arr1[i]);
//   }
// }

// const arr = ["a", "b", "c"];

// let newObj = {};

// for (let i = 0; i < arr.length; i++) {
//   newObj[i] = arr[i];
// }

// console.log(newObj);

// const commonElements = (arr1, arr2, arr3, n1, n2, n3) => {
//   let newArr1 = [];
//   let finalArr = [];

//   for (let i = 0; i < n1; i++) {
//     if (!newArr1.includes(arr1[i])) {
//       newArr1.push(arr1[i]);
//     }
//   }
//   for (let j = 0; j < n2; j++) {
//     if (newArr1.includes(arr2[j]) && !finalArr.includes(arr2[j])) {
//       finalArr.push(arr2[j]);
//     }
//   }
//   let counter = 0;
//   for (let k = 0; k < finalArr.length; k++) {
//     if (arr3.includes(finalArr[k])) {
//       counter++;
//     }
//   }

//   if (counter === finalArr.length && finalArr.length != 0) {
//     return finalArr;
//   } else if (finalArr.length === 0) {
//     return -1;
//   } else if (counter === 0) {
//     return -1;
//   }
// };

// let op = commonElements([0, 0, 0], [0], [0], 3, 1, 1);

// console.log(op);

function transposeMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create a new empty matrix with swapped dimensions
  console.log(new Array(numCols));
  const transposedMatrix = new Array(numCols).fill(null).map(() => []);
  console.log(transposedMatrix);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // Swap rows and columns
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
}

// Example usage:
const originalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const transposed = transposeMatrix(originalMatrix);

console.log(transposed);

/////////////////////////////////////////////////////////////////////////////

// 1 functions declaration

// function square1(num)

// {

//     return num*num

// }

// 2 functions expression

// const square2 = function(num){

//     return num*num

// }

// 3 firstclas function

//functions that are treat like a variable, so here square is a first class function

// function square3(num)

// {

//     return num*num

// }

// function displaySquare(fn){

//     console.log("square is"+fn(5))

// }

// displaySquare(square3)

// 4 what is IIFE function

// (function (num) {
//   console.log(num * num);
// })(7)(
//   //5 question on iife

//   function (x) {
//     return (function (y) {
//       console.log(x);
//     })(2);
//   }
// )(1);

let arr = ["a", "b", "c", "d", "e"];

let first = arr[1];
arr[1] = arr[0];
arr[0] = first;

console.log("<--->", arr);

//////////////////////////////////////////////////////////////////////////

// A - Arrow Fuction
// B - revision of next class

function x() {
  const a = 10;
}

var xyz = 30;

///////////////////////////////////////////////////////////////////////////

// const json1 = {
//   237: { projectCode: "2021-22-018", globalFormId: 181 },
//   238: { projectCode: "2021-22-018", globalFormId: 182 },
//   239: { projectCode: "2021-22-018", globalFormId: 186 },
//   240: { projectCode: "2021-22-015", globalFormId: 237 },
//   241: { projectCode: "2021-22-015", globalFormId: 184 },
//   242: { projectCode: "2021-22-015", globalFormId: 190 },
//   243: { projectCode: "not found", globalFormId: 240 },
//   244: { projectCode: "not found", globalFormId: 201 },
//   245: { projectCode: "not found", globalFormId: 242 },
//   246: { projectCode: "not found", globalFormId: 240 },
//   247: { projectCode: "not found", globalFormId: 241 },
//   248: { projectCode: "not found", globalFormId: 242 },
//   249: { projectCode: "not found", globalFormId: 208 },
//   250: { projectCode: "not found", globalFormId: 241 },
//   251: { projectCode: "not found", globalFormId: 242 },
//   252: { projectCode: "not found", globalFormId: 240 },
//   253: { projectCode: "not found", globalFormId: 241 },
//   254: { projectCode: "not found", globalFormId: 217 },
//   255: { projectCode: "2021-22-024", globalFormId: 240 },
//   256: { projectCode: "2021-22-024", globalFormId: 218 },
// };

// let json2 = {
//   155: "26",
//   157: "13",
//   181: "33",
//   182: "58",
//   183: "18",
//   184: "51",
//   185: "25",
//   186: "50",
//   187: "43",
//   188: "18",
//   189: "23",
//   190: "24",
//   191: "42",
//   192: "69",
//   193: "31",
//   194: "68",
//   195: "27",
//   196: "20",
//   197: "18",
//   199: "14",
//   200: "34",
//   201: "27",
//   202: "15",
//   203: "17",
//   204: "46",
//   205: "14",
//   206: "22",
//   207: "14",
//   208: "25",
//   209: "11",
//   210: "35",
//   212: "11",
//   213: "13",
//   214: "15",
//   215: "30",
//   216: "23",
//   217: "24",
//   218: "15",
// };

// const finalObj = (json1, json2) => {
//   const result = {};
//   for (const [key, value] of Object.entries(json1)) {
//     if (json2[value.globalFormId] && value.projectCode !== "not found") {
//       result[key] = value;
//     }
//   }
//   return result;
// };
// console.log(finalObj(json1, json2));
// // result
// // const result = {
// //   237: { projectCode: "2021-22-018", globalFormId: 181 },
// //   238: { projectCode: "2021-22-018", globalFormId: 182 },
// //   239: { projectCode: "2021-22-018", globalFormId: 186 },
// //   240: { projectCode: "2021-22-015", globalFormId: 237 },
// // };

// //////////////////////////

// // write a query to remove duplicate

// // duplicate fields email and mobile
// // user populate

// const creds = {
//   user: ObjectId("wfwfewefwefewffewf"),
//   userID: "shivam@gmail.com",
//   projectCode: ObjectId("12345687"),
// };

// const user = {
//   _id: ObjectId("wfwfewefwefewffewf"),
//   name: "Shivam",
//   age: 26,
//   empcode: "1560",
// };
// const project = {
//   _id: ObjectId("12345687"),
//   name: "Project112",
//   createdAt: "23-05-2023",
//   deadline: "23-05-2024",
// };

// result = {
//   name: "Shivam",
//   age: 26,
//   empcode: "1560",
//   projectName: "Project112",
//   projectCreatedAt: "23-05-2023",
//   projectDeadline: "23-05-2024",
//   userID: "shivam@gmail.com",
// };

// db.user.aggregate[
//   {
//     lookup: {
//       foreignKey: user,
//       localField: _id,
//       from: creds,
//       key: "result",
//     },
//   }
// ];

// ////////////////////////////

// const p = db.collection.find();

/////////////////////////////

const a = [67];
let b = a;
// console.log("a", a, "b", b);
b.push(97);
console.log(a);
let c = b;
c.push(64);
c = 54;
a = 94;
// console.log(a, b, c);

/////////////////////////////////////

// promise1
// promise2
// promise3

//////////////////////////////////

// const prom = new Promise();
// console.log(prom);

//////////////////////////////////////////////////////////////////////////////

// for (var i = 1; i <= 5; i++) {
//   function x(y) {
//     setTimeout(() => {
//       console.log(y);
//     }, i * 1000);
//   }
//   x(i);
// }

// function Counter() {
//   this.count = 0;

//   setInterval(() => {
//     this.count++; // 'this' refers to the Counter object
//     console.log(this.count);
//   }, 1000);
// }

// function Counter() {
//   this.count = 0;

//   setInterval(function () {
//     this.count++; // 'this' does not refer to the Counter object
//     console.log(this.count);
//   }, 1000);
// }

// Counter();

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     alert(i);
//   }, 1000 + i);
// }

// (function () {
//   var a = (b = 5);
// })();

// console.log(b);

// Get references to the input and paragraph elements
// const textInput = document.getElementById("textInput");
// const outputParagraph = document.getElementById("outputParagraph");

// // Add an event listener to the input element
// textInput.addEventListener("input", function () {
//   // Update the text content of the paragraph with the input value
//   outputParagraph.textContent = textInput.value;
// });

// const data = {
//   name: "a",
//   age: "1",
//   gender: "a",
// };

// // Convert the object to a JSON string
// const jsonData = JSON.stringify(data);

// // Save the JSON string to local storage
// localStorage.setItem("myData", jsonData);

// if (navigator.storage && navigator.storage.estimate) {
//   navigator.storage.estimate().then(function (quota) {
//     console.log(`Total quota: ${quota.quota}`);
//     console.log(`Used quota: ${quota.usage}`);
//   });
// }

// const circularObj = {
//   a: 1,
// };
// circularObj.b = circularObj; // Circular reference
// console.log(circularObj);
// const jsonString = JSON.stringify(circularObj); // Throws an error due to circular reference

function isArmstrongNumber(number) {
  // Convert the number to a string to count the digits
  const numStr = number.toString();
  const numDigits = numStr.length;

  // Calculate the Armstrong sum
  let armstrongSum = 0;
  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i], 10);
    console.log("<<<digit>>>", digit);
    armstrongSum += Math.pow(digit, numDigits);
  }
  console.log(armstrongSum);
  // Check if the number is an Armstrong number
  return armstrongSum === number;
}

// Example usage
const number = 153; // Change this to the number you want to check
if (isArmstrongNumber(number)) {
  console.log(number + " is an Armstrong number.");
} else {
  console.log(number + " is not an Armstrong number.");
}
