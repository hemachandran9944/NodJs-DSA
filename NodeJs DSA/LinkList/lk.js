
// Link List

class Node {
    constructor (UserDateValue){
        this.data = UserDateValue;
        this.next = null;
    }
}


class LinkUserData {
    constructor (UserDateValue) {
        const newNode = new Node(UserDateValue); 
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    append(UserDateValue) {
        const newNode = new Node(UserDateValue);
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


const UserData = new LinkUserData ('User 1');
UserData.append('User 2');
UserData.append('User 2');
UserData.append('User 4');
UserData.append('User 5');
UserData.append('User 6');
UserData.append('User 7');
UserData.append('User 8');
UserData.append('User 9');
UserData.append('User 10');

console.log(UserData);