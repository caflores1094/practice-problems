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

LinkedList.prototype.weave = function(){
  var fast = this.head.next;
  var slow = this.head;

  while(fast.next !== null){
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = this.head;
  slow = slow.next;

  while(slow.next !== null){
    var temp = fast.next;
    fast.next = slow;
    slow = slow.next;
    fast.next.next = temp;
    fast = fast.next.next
  }

  fast.next = slow;

  // console.log(fast.data);
  // console.log(slow.data);
}

var Node = function(data, next){
  this.data = data;
  this.next = next;
}

var list = new LinkedList();
list.push('a1');
list.push('a2');
list.push('a3');
list.push('a4');
list.push('a5');
list.push('b1');
list.push('b2');
list.push('b3');
list.push('b4');
list.push('b5');

// list.print();
// console.log('---------')
list.weave();
// list.print();
//==========================================
//Remove duplicates from a list
var llist = new LinkedList();
llist.push('1');
llist.push('1');
llist.push('2');
llist.push('3');
llist.push('4');
llist.push('1');
llist.push('6');
llist.push('3');

llist.print();








