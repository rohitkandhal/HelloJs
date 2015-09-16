// Binary Search Tree
/* Test tree
          15
        /    \   
       /      \
      6         18
    /  \      /    \
  3     7    17     20
 / \     \
2   4     13
         /
        9
*/

window.ds = window.ds || {};

(function (ns) {

    ns.BST = BST;

    function BST(data, left, right, parent) {
        this.root = null;
    }

    function Node(data, left, right, parent) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
    
    // Binary Insertion
    function insert(data) {
        var newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            insertNode(this.root, newNode);
        }
    }

    function insertNode(root, newNode) {
        // Assumes all keys in binary tree are different
        if (newNode.data < root.data) {
            if (root.left == null) {
                // == null checks for both null and undefined
                root.left = newNode;
            } else {
                insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right == null) {
                root.right = newNode;
            } else {
                insertNode(root.right, newNode);
            }
        }
    }
    
    // 1 a) Inorder traversal - recursion
    function inorderRecursive1(root) {
        var out = [];

        function addToOutput(value) {
            out.push(value);
        }
        inorderRecursiveInternal(root, addToOutput);

        return out.join(' ');
    }

    function inorderRecursiveInternal(node, visitCallback) {
        if (node != null) {
            inorderRecursiveInternal(node.left, visitCallback);
            visitCallback(node.data);
            inorderRecursiveInternal(node.right, visitCallback);
        }
    }
    ;
    
    // 1 b) Inorder traversal - recursion
    function inorderRecursive2(root) {
        var out = '';
        if (root != null) {
            out += inorderRecursive2(root.left);
            out += root.data + ' ';
            out += inorderRecursive2(root.right);
        }
        return out;
    }
    
    // Inorder traversal using stack
    function inorderIterative(root) {
        var stack = [];
        var curr = root;
        var out = [];

        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }

        while (stack.length !== 0) {
            curr = stack.pop();
            out.push(curr.data);

            if (curr.right != null) {
                curr = curr.right;
                while (curr != null) {
                    stack.push(curr);
                    curr = curr.left;
                }
            }
        }
        return out.join(' ');
    }
    
    // Binary Search iterative
    function searchIterative(root, key) {
        while (root != null && root.data !== key) {
            if (root.data > key) {
                root = root.left;
            }
            else {
                root = root.right;
            }
        }
        return root;
    }

    function successor(node) {
        if (node != null) {
            var temp;
            
            // If there is a right child, get leftmost node in right subtree
            if (node.right != null) {
                return minNode(node.right);
            }
            
            // Search till a parent is found whose left subtree has curr node
            temp = node.parent;
            while (temp != null && temp.right === node) {
                node = temp;
                temp = temp.parent;
            }
            return temp;
        }
    }
    
    // Minimum node
    function minNode(node) {
        while (node && node.left) {
            node = node.left;
        }
        return node;
    }

    var getTestTree = function () {
        var n2, n3, n4, n6, n7, n9, n13, n15, n17, n18, n20;

        n2 = new BST(2);
        n3 = new BST(3);
        n4 = new BST(4);
        n6 = new BST(6);
        n7 = new BST(7);
        n9 = new BST(9);
        n13 = new BST(13);
        n15 = new BST(15);
        n17 = new BST(17);
        n18 = new BST(18);
        n20 = new BST(20);

        n2.parent = n4.parent = n3;
        n9.parent = n13;
        n13.parent = n7;
        n3.parent = n7.parent = n6;
        n17.parent = n20.parent = n18;
        n6.parent = n18.parent = n15;

        n15.left = n6;
        n15.right = n18;
        n6.left = n3;
        n6.right = n7;
        n3.left = n2;
        n3.right = n4;
        n7.right = n13;
        n13.left = n9;
        n18.left = n17;
        n18.right = n20;

        return n15;
    }

    BST.prototype.getTestTree = getTestTree;
    BST.prototype.inorderRecursive1 = inorderRecursive1;
    BST.prototype.inorderRecursive2 = inorderRecursive2;
    BST.prototype.inorderIterative = inorderIterative;
    BST.prototype.insert = insert;
    BST.prototype.searchIterative = searchIterative;
    BST.prototype.successor = successor;
    BST.prototype.minNode = minNode;
}
    (window.ds));

function getBSTTest1() {
    var bst = new window.ds.BST();
    var values = [15, 6, 18, 3, 7, 17, 20, 2, 4, 13, 9];

    values.forEach(function (x) {
        bst.insert(x);
    });
    return bst;
}