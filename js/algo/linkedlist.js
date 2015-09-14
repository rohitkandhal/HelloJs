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
    LinkedList.prototype.deleteNodes = deleteNodes;
    
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
    
    function deleteNodes(val) {
        // delete all nodes whose value is 'val'
        var curr = this.head;
        
        while (curr !== undefined && curr.data === val) {
            curr = curr.next;
        }
        
        this.head = curr;
        
        while (curr && curr.next) {
            if (curr.next.data === val) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
        }
    }
}
(window.ds));

// testing linked list
var testArr = [5, 2, 4, 6, 1, 3];
var testArrEmpty = [];
var testArrSame = [5, 5, 5];

var l1 = new window.ds.LinkedList();
// l1.append(testArr);
// l1.append(testArrSame);
// l1.print();


var inp1 = [1], out1 = [1];
var inp2 = [5], out2 = [];
var inp3 = [5, 5], out3 = [];
var inp4 = [5, 5, 1], out4 = [1];
var inp5 = [5, 5, 1, 5], out5 = [1];
var inp6 = [1, 5, 2, 5, 5, 5, 6], out6 = [1, 2, 6];

function verify(testInput) {
    var out = [];

    l1 = new window.ds.LinkedList();
    l1.append(testInput);
    
    out.push('Input: ', l1.print());
    l1.deleteNodes(5);
    out.push('Output: ', l1.print());
    
    return out.join(' ');
}

verify(inp1);
verify(inp2);
verify(inp3);