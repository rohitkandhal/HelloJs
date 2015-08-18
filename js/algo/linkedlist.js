// Linked list implementation
window.ds = window.ds || {};

(function(ns) {
    ns.LinkedList = LinkedList;
    
    function LinkedList() {
        this.head;
    }
    
    // Linked List node
    function Node(data, next) {
        this.data = data;
        this.next = next;
    }
    
    // Prototype functions
    LinkedList.prototype.append = append;
    LinkedList.prototype.insert = insert;
    LinkedList.prototype.print = printList;
    
    // Function implementations
    
    function append(inp) {
        // Create a list from an array
        if (Array.isArray(inp)) {
            for (var i = 0; i < inp.length; i++) {
                this.insert(inp[i]);
            }
            
            // inp.forEach(function(key) {
            //  this.insert(key);   // ERROR: this scope is not linkedlist
            // });
        }
    }
    
    function insert(data) {
        var curr, 
        newNode;
        
        curr = this.head;
        newNode = new Node(data);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            while (curr && curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        
        return this.head;
    }
    
    function printList(head) {
        var curr, 
        out = [];
        
        curr = head || this.head;
        while (curr) {
            out.push(curr.data);
            curr = curr.next;
        }
        
        return out.join(' -> ');
    }
}
(window.ds));

// testing linked list
var testArr = [5, 2, 4, 6, 1, 3];
var testArrEmpty = [];
var testArrSame = [5, 5, 5];

var l1 = new window.ds.LinkedList();
l1.append(testArr);
l1.append(testArrSame);
l1.print();
