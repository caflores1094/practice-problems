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

  var counter = 0;

  while(current !== null && counter < 6){
    counter++;
    console.log(current.data);
    current = current.next;
  }
}

var Node = function(data, next){
  this.data = data;
  this.next = next;
}

//Implement linked list addition so that if you have two LL's like so: 1 -> 2 -> 3 + 4 -> 5
//that is the equivalent of 321 + 54
//write a function that computes this

LinkedList.prototype.printInt = function(){
  var iter = this.head;
  var result = [];

  while(iter !== null){
    result.unshift(iter.data);
    iter = iter.next;
  }

  return result.join('');
}

var sumJoin = function(list1, list2){
  iter1 = list1.head;
  iter2 = list2.head;

  var resList = new LinkedList();

  while(iter1 !== null || iter2 !== null){
    var data1 = iter1 ? iter1.data : 0;
    var data2 = iter2 ? iter2.data : 0;
    resList.push(data1 + data2);

    iter1 = iter1 ? iter1.next : iter1;
    iter2 = iter2 ? iter2.next : iter2;
  }

  // check for double digits now
  var resIter = resList.head;

  while(resIter !== null){

    if(resIter.data > 9){
      resIter.data = resIter.data % 10;

      resIter.next === null ? resList.push(1) : resIter.next.data++;
    }

    resIter = resIter.next;
  }

  console.log(resList.printInt());

  return resList.printInt();
}

var ll1 = new LinkedList();
ll1.push(9);
ll1.push(9);
ll1.push(1);

var ll2 = new LinkedList();
ll2.push(2);
ll2.push(9);

sumJoin(ll1, ll2);







