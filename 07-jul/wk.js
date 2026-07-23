function testEven(n) {
  //Your awesome code here!

  if (n % 2 == 0) {
    return true;
  }
  return false;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  // Go.
  return new Node(data, head);
}

function buildOneTwoThree() {
  // Go.
}

function length(head) {
  // Your code goes here.
  console.log(head);
}

function count(head, data) {
  // Your code goes here.
}

let chained = null;
chained = push(chained, 3);
chained = push(chained, 2);
chained = push(chained, 1);
chained = push(chained, 8);

console.log(chained);
