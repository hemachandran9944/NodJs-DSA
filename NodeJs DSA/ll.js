class Node {
    constructor(value) {
        this.data = value;
        this.next = null; 
    }
}

class LinkList {
    constructor (value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; 
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}


const myTrain = new LinkList('User 1');
myTrain.append('User 2');

console.log(myTrain);





