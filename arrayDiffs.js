//ARRAY DIFFERENCES

// Pseudo
// I need to create an empty array. Later I will push unique ints into it.
// "let empty array"
//
// I need to push all unique int into the new array
// I need to check for all unique integers.
// I  need to check if any of the elements in arr1 are in arr2 and vice versa.
//
// "if the value of each index in arr1 equals the value of any index in arr2, do NOT push into the output array."
//
// "if the value of any index in arr1 does not equal the value of any index in arr2 push into the output array."
//
// 


//-----------------Method 1--------------------

// const arrayDiffs = (arr1, arr2) => {

//   let uniqueNums = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       uniqueNums.push(arr1[i])
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr1.includes(arr2[i])) {
//       uniqueNums.push(arr2[i])
//     }
//   }
//   return uniqueNums;
// }

//-----------------Method 2--------------------

// const arrayDiffs = (arr1, arr2) => {

//   let uniqueNums = [];

//   arr1.forEach((num) => {
//     arr2.includes(num) ? null : uniqueNums.push(num);
//   })

//   arr2.forEach((num) => {
//     arr1.includes(num) ? null : uniqueNums.push(num);
//   })

//   return uniqueNums;
// }

//-----------------Method 3--------------------

const arrayDiffs = (arr1, arr2) => {

  return uniqueNums = arr1
    .filter((num) => !arr2.includes(num))
    .concat(arr2.filter((num) => !arr1.includes(num)))

};



console.log(arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]));

module.exports = {
  arrayDiffs,
};
