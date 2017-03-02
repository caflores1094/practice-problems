var TreeNode = function(value){
  this.left = null;
  this.right = null;
  this.value = value;
}

var bstHead = new TreeNode('5');

bstHead.left = new TreeNode('3');
bstHead.right = new TreeNode('8');

bstHead.left.left = new TreeNode('1');
bstHead.left.right = new TreeNode('4');

bstHead.right.left = new TreeNode('6');
bstHead.right.right = new TreeNode('9');

var bstInorderPrint = function(treeHead){
  //need to check that the input is not null
  if(treeHead !== null){
    //recurse on left child
    bstInorderPrint(treeHead.left);
    //print current node
    console.log(treeHead.value);
    //print the right child
    bstInorderPrint(treeHead.right);
  }
}

var bstPreorderPrint = function(treeHead){
  if(treeHead !== null){
    //print current node
    console.log(treeHead.value);
    //recurse on left child
    bstPreorderPrint(treeHead.left);
    //print the right child
    bstPreorderPrint(treeHead.right);
  }
}

// bstInorderPrint(bstHead);
bstPreorderPrint(bstHead);