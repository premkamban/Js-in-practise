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
      return this;
    }
    var current = this.root;
    while (true) {
      if (current.value > val) {
        if (current.left.val === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (current.value < val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  Find(val) {
    if (!this.root) return null;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }
}

/*Tree Traversal 

BFS -
DFS - Inorder preorder post order

*/
const bntree = new Bst();
