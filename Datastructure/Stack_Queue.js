// shift and unshift 1 approach for stack and push and pop for another method of stack implementation
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      var temp = this.first;
      this.first = this.first.next;
      return temp.value;
    }
  }
}

class Queue {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      return temp.val;
    }
    --this.size;
  }
}
