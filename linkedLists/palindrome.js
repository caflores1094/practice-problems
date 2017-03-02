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

var isPalindrome = function(current, counter){
  //base case
  //first we need to get to the middle element to begin checking
  if(counter === 1 ){
    return current.next;
  }
  if(counter === 0 ){
    return current;
  }

  var checkAgainst = isPalindrome(current.next, counter - 2);
  if(!checkAgainst){
    return checkAgainst;
  }
  var sameBool = current.data === checkAgainst.data;
  if(sameBool){
    return checkAgainst.next || true;
  } else {
    return sameBool;
  }
}

var list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(2);
list.push(1);

// list.print();
// console.log(isPalindrome(list.head, 5));

var list = new LinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(3);
list.push(2);
list.push(1);
list.push(0);

// list.print();
// console.log(isPalindrome(list.head, 8));







