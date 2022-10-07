class Node {
    constructor(value) {
        this.next = null;
        this.val = value;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newtail = current;
        while (current.next) {
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.lenght++;
        return this;
    }

    shift() {
        var currenthead = this.head;
        if (!this.head) {
            return undefined;
        } else {
            this.head = currenthead.next;
            this.length--;
            return currenthead;
        }
    }

    get(index) {
        if (index >= this.length) {
            return null;
        }
        var current = this.head;
        var counter = 0;
        while (index === current) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var findNode = this.get(index);
        if (findNode) {
            findNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        lenght++;
    }

    remove() { }
}