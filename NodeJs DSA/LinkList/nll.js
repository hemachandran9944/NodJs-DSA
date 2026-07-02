
class Node {
    constructor (value) {
        this.data = value;
        this.next = null;
    }
};


class LinkList {
    constructor (value) {
        const newNode = new Node(value); 
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    append (value) {
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
    prepend (value) {
        const newNode = new Node (value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
};


const UserData = new LinkList('User1');
UserData.append('User2');
UserData.append('User3');
UserData.append('User4');
UserData.append('User4');
//console.log(UserData);

const insertUserData = new LinkList ('insert newUser Data1');

insertUserData.prepend('insert newUser Data2');

console.log(UserData, insertUserData);











// Find the duplicate array element

//const arr = [10, 10, 20, 30, 40, 40, 50];
//
//console.log( arr.length);
//
//let findDupicateElement = [... new Set (arr)];
//findDupicateElement.push(200);
//findDupicateElement.unshift(100);
//findDupicateElement.splice(1,1, 15);
//console.log( findDupicateElement.length);
//console.log( findDupicateElement);