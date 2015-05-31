 // 1. Linked list implementation

window.ds = window.ds || {};

(function(ns) {
    
    ns.LinkedList = LinkedList;
    ns.createListFromArr = createListFromArr;
    ns.printList = printList;

    // 
    function LinkedList(data, next) {
        this.data = data;
        this.next = next;
    }
    
    function createListFromArr(arr) {
        var head = new LinkedList();
        var curr = head;
        
        arr.forEach(function(x) {
            var newNode = new LinkedList(x);
            curr.next = newNode;
            curr = curr.next;
        });
        
        return head.next;   // careful: we don't do any manipulation at head
    }
    
    function printList(head) {
        var curr = head;
        var output = "";
        while(curr !== undefined) {
            output += (curr.data + " ");
            curr = curr.next;
        }
        return output.trim();
    }

}(window.ds));

// test functions
var testArr = [5, 2, 4, 6, 1, 3];
var testArrEmpty = [];
var testArrSame = [5, 5, 5];

var head1 = window.ds.createListFromArr(testArrEmpty);
window.ds.printList(head1);

