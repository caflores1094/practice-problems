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

}

LinkedList.prototype.print = function(){
  var current = this.head;

  while(current !== null){
    console.log(current.data);
    current = current.next;
  }
}

var Node = function(data, next){
  this.data = data;
  this.next = next;
}

var checkForIntersection = function(list1, list2){
  //first find each lengths
  var iter1 = list1.head;
  var iter2 = list2.head;
  var counter1 = 0;
  var counter2 = 0;

  while(iter1 !== null || iter2 !== null){
    if(iter1){
      counter1++;
    }
    if(iter2){
      counter2++;
    }

    iter1 = iter1 ? iter1.next : iter1;
    iter2 = iter2 ? iter2.next : iter2;
  }
  
  if(counter1 < counter2) {
    var smallListIter = list1.head;
    var largerListIter = list2.head;
  }
  var smallListIter;
  var largerListIter;

  counter1 < counter2 ? (smallListIter = list1.head, largerListIter = list2.head) : (smallListIter = list2.head, largerListIter = list1.head);

  for(var i = 0; i < Math.abs(counter1 - counter2); i++){
    largerListIter = largerListIter.next;
  }

  while(smallListIter !== null){
    if(smallListIter === largerListIter){
      return smallListIter;
    } else {
      console.log('small: '+smallListIter.data, 'large: '+largerListIter.data)
      smallListIter = smallListIter.next;   
      largerListIter = largerListIter.next;
    }
  }

  return false;

}

var list1 = new LinkedList();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);

var list2 = new LinkedList();
list2.push('a');
list2.push('b');
list2.push('b');
list2.push('b');
list2.push('b');
list2.push('b');
list2.tail.next = list1.head.next.next.next;

// console.log(`intersecting node is: ${checkForIntersection(list1, list2).data}`);

// list1.print();
// console.log('==========')
// list2.print();


