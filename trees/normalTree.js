var Tree = function(rootN){
  this.root = rootN;
}

//Depth First PRactice
var searchDF = function(node, target, func){
  console.log(node.value);

  if(node.value === target){
    console.log(`found it! ${node}`)
    func(node);
  }

  node.children.forEach((elem) => {
    searchDF(elem, target, func);
  });
}

//BREADTH FIRST PRACTICE  
Tree.prototype.print = function(){
  //Make a breadth first search and print 

  //Create A queue
  var queue = []; 
  //Insert the root in the queue
  queue.push(this.root);
  var current;

  //While the queue is not empty, go through it 
  while(queue.length > 0){

    //dequeue the next element
    current = queue.shift();

    //print that element
    console.log(current.value);
    
    //if that element has children, 
    //go through and enqueue each of the kids
    if(current.children){
      for(var i = 0; i < current.children.length; i++){
        queue.push(current.children[i]);
      }
    }
  }
}

Tree.prototype.find = function(target){
  var queue = []; 
  queue.push(this.root);
  var current;

  var count = 0;
  while(queue.length > 0){
    count++;
    current = queue.shift();
    if(current.value === target){
      console.log(`found it! node: ${current.value} exists, count is ${count}`);
      return current;
    }
    if(current.children){
      for(var i = 0; i < current.children.length; i++){
        queue.push(current.children[i]);
      }
    }
  }

  return null;
}

var TreeNode = function(value){
  this.value = value;
  this.children = [];
}

TreeNode.prototype.addChild = function(newChild){
  this.children.push(newChild);
}

//create the tree and try to print out the elements
var nodeA = new TreeNode('A');
var nodeB = new TreeNode('B');
var nodeC = new TreeNode('C');
var nodeD = new TreeNode('D');
var nodeE = new TreeNode('E');
var nodeF = new TreeNode('F');

nodeD.addChild(nodeE);
nodeD.addChild(nodeF);

nodeB.addChild(nodeD);

nodeA.addChild(nodeB);
nodeA.addChild(nodeC);

var tr1 = new Tree(nodeA);

// tr1.print();
// tr1.find('D');
var e;
searchDF(nodeA, 'D', (res) => {e = res});
console.log('D found: ', e)

