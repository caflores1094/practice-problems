//to find Element's children: heapArr[2i + 1], heapArr[2i + 2]
//to find parent node: heapArr[ floor((i-1)/2) ]
var minHeap = function(inputArr){
  this.heap = inputArr;
}

//prints "in order" of a binary search true 
minHeap.prototype.inOrderPrint = function(current){
  var current = current || 0;
  //check if current exists or not
  if(current < this.heap.length){
    //recurse on left
    this.inOrderPrint(2*current + 1);
    //print current
    console.log(this.heap[current])
    //recurse on right
    this.inOrderPrint(2*current + 2);
  }
}

minHeap.prototype.insert = function(newElement){
  //insert at far right (end of array)
  this.heap.push(newElement);
  //bubble up the heap as far as possible
  this.bubbleUp(this.heap.length - 1)
}

minHeap.prototype.bubbleUp = function(current){
  //find parent, check if current is less than parent
  var parent = Math.floor((current - 1) / 2);
  if( this.heap[current] < this.heap[parent]){
    //switch parent and current if so
    var temp = this.heap[current];
    this.heap[current] = this.heap[parent];
    this.heap[parent] = temp;
    //repeat with next parent
    this.bubbleUp(parent);
  }
}

var myHeap = new minHeap([1, 3, 4, 6, 9, 5, 10]);

myHeap.insert(0);
myHeap.inOrderPrint();
console.log(myHeap.heap)
