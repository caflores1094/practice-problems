//create MinHeap
var minHeapHead = new TreeNode(2);

minHeapHead.left = new TreeNode(4);
minHeapHead.right = new TreeNode(7);

minHeapHead.left.left = new TreeNode(12);
minHeapHead.left.right = new TreeNode(9);

minHeapHead.right.left = new TreeNode(10);

var bubbleLastNodeUp = function(parent, current){
  if(current !== null){
    bubbleLastNodeUp(current, current.right);
    if(current.right !== null && current.right.value < current.value){
      //SWAP

      //First create temporary trackers for the current, and currents left
      var tempCurr = current;
      var replacement = current.right;
      var newLeftForCurrent = replacement.left;
      var newRightForCurrent = replacement.right;

      //now give the parent a new right
      if(parent !== null){
        parent.right = replacement;
      }
      //give replacement current's left node
      replacement.left = current.left;
      //give current it's replacement's left and right nodes
      current.left = newLeftForCurrent;
      current.right = newRightForCurrent;
      //finally, connect replacement's right to current
      replacement.right = current;
      //need to replace the reference to the head
      if(parent === null){
        // current = replacement;
        return replacement;
      }
    }
  }
}

var minHeapInsert = function(head, value){
  var newNode = new TreeNode(value);

  //insert as the last node on the right
  var current = head;
  while(current.right !== null){
    current = current.right;
  }

  current.right = newNode;

  //now bubble up to find the right spot
  return bubbleLastNodeUp(null, head);

}

// bstInorderPrint(minHeapHead);
// console.log('--------')
// minHeapHead = minHeapInsert(minHeapHead, 1);
// console.log(minHeapHead)
bstInorderPrint(minHeapHead);