//Create a linked list class and then create a cyclic list and an acyclic list
//build function to check whether or not a list is cyclic or acyclic

var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.push = function(data){
  var newNode = new Node(data, null);

  if(this.head === null){
    this.head = newNode;
  }

  if(this.tail){
    this.tail.next = newNode;
  }
  this.tail = newNode;

  if(data === 1){
    this.tail.next = this.head.next.next;
  }

}

LinkedList.prototype.print = function(){
  var current = this.head;

  var counter = 0;

  while(current !== null && counter < 6){
    counter++;
    console.log(current.data);
    current = current.next;
  }
}

LinkedList.prototype.checkForCyclical = function(){
  
  var fastIter = this.head.next;
  var slowIter = this.head;

  while(true){
    if(fastIter === null || fastIter.next === null){
      return false;
    } else if(fastIter === slowIter || fastIter.next === slowIter) {
      return true;
    } else {
      fastIter = fastIter.next.next;
      slowIter = slowIter.next;
    }
  }


  //MEMORY INEFFICIENT SOLUTION
  // var cyclical = false;
  // var storage = {};
  // var iterator = this.head;

  // while(iterator !== null && cyclical=== false ){
  //   if(iterator.data in storage){
  //     cyclical = true;
  //   } else {
  //     storage[iterator.data] = iterator;
  //     iterator = iterator.next;
  //   }
  // }

  // return cyclical;
}

var Node = function(data, next){
  this.data = data;
  this.next = next;
}

var list1 = new LinkedList();

list1.push(3);
list1.push(5);
list1.push(2);
list1.push(7);
list1.push(8);
list1.push(1);

var list2 = new LinkedList();

list2.push(3);
list2.push(5);
list2.push(2);
list2.push(7);
list2.push(8);

//TESTING AREA
//----------------
//create cyclic list
// list1.print();
// console.log('cyclical? ' + list1.checkForCyclical());

// console.log('----------------------')

// list2.print();
// console.log('cyclical? ' + list2.checkForCyclical());











