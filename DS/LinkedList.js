class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}


var n1 = new Node("Raman", null);
var n2 = new Node("Bki", n1);
var n3 = new Node("Cherry", n2);
var n4 = new Node("Vaishu", n3);

var head = n4;
var ptr = n4;

while(ptr != null) {
    console.log(ptr.data);
    ptr = ptr.next;
}