class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            const newNode = new Node(value)
            this.tail.next = newNode;
            newNode.prev = this.tail; 
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop(){
        if(!this.head) return undefined;  // or !this.tail or this.length == 0
        let temp = this.tail;
        if(this.length == 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;            
        }
        this.length--
        return temp;
    }

    unshift(value){
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;

    }
    
    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;

        }
        this.length--;
        return temp; 
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if(index < this.length/2){
            for(let i =0; i < index; i++){
                temp = temp.next;
            }    
        }else{
            temp = this.tail;
            for(let i = this.length - 1 ; i > index; i-- ){
                temp = temp.prev;
            }
        }
        return temp
    }

    set(index,value){
        let temp = this.get(index);
        if (temp) {
            this.value = value;
            return true   
        }
        return false;
    }

    insert(index,value) {
        if(index == 0) return this.unshift(value);
        if(index == this.length) return this.push(value);
        if(index < 0  || index > this.length) return false;
        
        const newNode = new Node(value);
        
        let temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next.prev = newNode;
        temp.next = newNode;
        newNode.prev = temp;

        this.length++;
        return this;
            
    }

    insertDLL(index,value) {
        if(index == 0) return this.unshift(value);
        if(index == this.length) return this.push(value);
        if(index < 0 || index > this.length) return undefined;

        const newNode = new Node(value);
        let before = this.get(index-1);
        let after = this.get(index);

        before.next = newNode;
        newNode.prev = before;
        after.prev = newNode;
        newNode.next = after;
        this.length++
        return this;
    }

    remove(index){
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        let before = this.get(index - 1);
        let temp = before.next;
        before.next = temp.next;
        temp.next.prev = before;
        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

//     remove(index){
//         if(index === 0) return this.shift();
//         if(index === this.length - 1) return this.pop();
//         if(index < 0 || index >= this.length) return undefined;

//         let temp = this.get(index);
        
//         temp.prev.next = temp.next;
//         temp.next.prev = temp.prev;
//         tmp.next = null;
//         temp.prev = null;
//         this.length--;
//         return temp;
//     }

}

let myDoublyLinkedList =  new DoublyLinkedList(7);
myDoublyLinkedList.push(11);
myDoublyLinkedList.push(12);
myDoublyLinkedList.push(13);