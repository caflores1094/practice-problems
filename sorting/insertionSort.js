var insertionSort = function(arr){
  for(var i=1; i<arr.length; i++){
    var prevIter = i - 1;
    var curr = i;
    while(arr[prevIter] > arr[curr]){
      var temp = arr[prevIter];
      arr[prevIter] = arr[curr];
      arr[curr] = temp;

      curr--;
      prevIter--;
    }
  }
  return arr;
}

var arr = [2,62,1,6,8];
console.log(insertionSort(arr));