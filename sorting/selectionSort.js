var arr = [4,2,65,1,8];

console.log(`unsorted: ${arr}`);

var selectionSort = function(arr){
  var result = arr.slice();

  var recurse = function(toSort, currIndex){
    if(currIndex === toSort.length - 1){
      console.log('done')
      return toSort;
    }

    console.log('currIndex: '+ currIndex);
    var minIndex = currIndex;

    for(var i = currIndex + 1; i < toSort.length; i++){
      if(toSort[i] < toSort[minIndex]){
        minIndex = i;
      }
    }

    //swap
    var temp = toSort[minIndex];
    toSort[minIndex] = toSort[currIndex];
    toSort[currIndex] = temp;

    //now do this for the rest of the elements
    console.log(`inner: ${toSort}`);
    return recurse(toSort, ++currIndex);
  }

  return recurse(result, 0);
}

console.log(`Sorted: ${selectionSort(arr)}`);