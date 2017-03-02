var quickSort = function(arr, left = 0, right = arr.length-1, counter=0){
  
  var firstLeft = left, firstRight = right;

  if(left >= right){
    return;
  }

  var pivot = arr[left];
  console.log('PIVOT: ', pivot)


  while(left <= right){
    while(arr[left] < pivot){
      ++left;
    }
    while(arr[right] > pivot){
      --right;
    }

    if(left <= right){ 

      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
  }

  //quickSort each half
  //left side
  quickSort(arr, firstLeft, left - 1, ++counter );
  //right side
  quickSort(arr, left , firstRight, ++counter );
}

var arr = [7, -3 , 17 , 6, 4, 55, 23, 1, -9, 8];
console.log('original: ' + arr);
quickSort(arr)
console.log('Result: '+arr);