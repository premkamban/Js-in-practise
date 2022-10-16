/*BST*/
/*BT is atleast it should have 2 node ,1 node or zero node not more than that */

class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
}
class Bst {
  constructor() {
    this.root = null;
  }
  Insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    }
    if (!this.root.value > val) {
      if (this.root.right.val > val) {
      } else {
      }
    } else if (this.root.value < val) {
    }
    return this;
  }

  Find(val) {
    if (!this.root) return null;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (val < current.value) {
      } else if (val > current.value) {
      } else {
        found = true;
      }
    }
    return current;
  }
}
