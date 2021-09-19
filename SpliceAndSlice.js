//slice(startingIndex,endingIndex) Does not affect the original array
let arr = [1,2,3,4,5];
console.log(arr.slice(1,4)); // exclude the fourth index

//splice(startingIndex,endingIndex,n no of arguments) affect the original array
//If ending not specified the by default length of an array is taken
let arr2 = [2,3,4,5,6];
arr2.splice(1,3)  //1-3 wil be removed
console.log(arr2)

let arr3 = ['2','3','4','5','6'];
arr3.splice(2,3,'9');   // remove 3 elements after 2nd index including the second index
console.log(arr3)