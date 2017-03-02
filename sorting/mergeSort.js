//Second Attempt: Get the space complexity down to O(n) with temp array









//FIRST ATTEMPT: works! Time: O(n log n )) Space: O(n log n ) (-______-)  TRY to minimize space efficiency
// //input: two sorted arrays
// //output: one sorted array
// var merge = function(arr1, arr2){

//   var p1 = 0, p2 = 0;
//   var result = [];
//   var p1Next = false;

//   while(p1 < arr1.length && p2 < arr2.length){
//     //compare the first two
//     if(arr1[p1] <= arr2[p2]){
//       result.push(arr1[p1]);
//       p1++;
//     } else{
//       result.push(arr2[p2]);
//       p2++;
//       p1Next = p2 === arr2.length ? true : false;
//     }
//   }
//   //append the remainder of the array that has not all been pushed
//   var next = p1Next ? p1 : p2;
//   var limit = p1Next ? arr1.length : arr2.length;
//   var arr = p1Next ? arr1 : arr2;
//   for(var i = next; i < limit; i++ ){
//     result.push(arr[i]);
//   }
//   return result;
// }

// // var arr1 = [1, 70, 200];
// // var arr2 = [5, 25, 59];

// // console.log(merge(arr1, arr2));

// var mergeSort = function(arr){
//   //basecase, the actual array returned if only one element
//   if(arr.length === 1){
//     return arr;
//   }

//   //if more than one element in the array, merge the result of
//   //sorting each half, i.e., keep halving each side and merging the result of
//   //"sorting" each half. At the end of the callstack, we will have two arrays 
//   //of size 1 to be sorted (returned) and merged. Our merge function merges the two
//   //elements according to proper placement
//   var firstHalf = arr.slice(0, Math.floor(arr.length / 2));
//   var secondHalf = arr.slice(Math.floor(arr.length / 2), arr.length + 1);

//   return merge(mergeSort(firstHalf), mergeSort(secondHalf));
// }


//  var arrTest = [3, 50, -9, 1, 70];

// console.log(mergeSort(arrTest));




