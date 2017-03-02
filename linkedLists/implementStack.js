//implement a linked list and print the resulting list to the DOM within the "stackElements" div
var stackDiv = document.getElementById('stackElements');


var Stack = function(){

  this.head = null;

}

Stack.prototype.push = function(data){
  if(this.head === null){
    this.head = new Node(data, null);
  } else {
    var node = new Node(data, null);
    node.next = this.head;
    this.head = node;
  }
}

Stack.prototype.pop = function(data){
  if(this.head === null){
    console.log("Empty stack");
  } else {
    this.head = this.head.next;
    this.print();

    return this.head.data;
  }
}

Stack.prototype.print = function(){
  stackDiv.innerHTML = "";
  if(this.head){
    var current = this.head;
    while(current !== null ){
      var newElem = document.createElement("p");
      newElem.innerHTML = current.data;
      stackDiv.appendChild(newElem);

      current = current.next;
    }

  } else {
    var emptyP = document.createElement("p");
    emptyP.innerHTML = "Empty Stack!"
    stackDiv.appendChild(emptyP);
  }
}

var Node = function(data, next){
  this.data = data;
  this.next = next;
}

var myStack = new Stack();
myStack.push(10);
myStack.push(9);
myStack.push(8);
myStack.push(7);
myStack.push(6);
myStack.push(5);
myStack.print(4);

//Write a function that finds the nth element from the end of the linked list, linear time, constant space
Stack.prototype.findNth = function(nth){
  var pointer1 = this.head;
  var pointer2 = this.head;

  var counter = nth;

  while(pointer1 !== null){
    // console.log('Count:' + counter)
    // console.log('P1: '+ pointer1.data)
    // console.log('P2: '+ pointer2.data);
    //increment pointer1 to be pointer1's next node
    pointer1 = pointer1.next;

    if(counter === 0){
      pointer2 = pointer2.next;
    }
    if(counter > 0){
      counter--;
    }
  }

  //we are at end state, whatever pointer2 points at is Nth element
  return pointer2.data;
}

// console.log(myStack.findNth(5))





