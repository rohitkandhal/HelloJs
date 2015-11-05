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

    BST.prototype.inorderRecursive1 = inorderRecursive1;
    BST.prototype.inorderRecursive2 = inorderRecursive2;
    BST.prototype.inorderIterative = inorderIterative;
    BST.prototype.insert = insert;
    BST.prototype.isBinarySearchTree = isBinarySearchTree;
    BST.prototype.isBinarySearchTree2 = isBinarySearchTree2;
    BST.prototype.searchIterative = searchIterative;
    BST.prototype.successor = successor;
    BST.prototype.minNode = minNode;
    
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
                newNode.parent = root;
            } else {
                insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right == null) {
                root.right = newNode;
                newNode.parent = root;
            } else {
                insertNode(root.right, newNode);
            }
        }
    }
    
    // a) Inorder traversal - recursion
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
    
    // b) Inorder traversal - recursion
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
            if (key < root.data) {
                root = root.left;
            }
            else {
                root = root.right;
            }
        }
        return root || "Not found";
    }
    
    // Successor of current node
    function successor(node) {
        if (node != null) {
            var temp;
            
            // 1. If there is a right child, get leftmost node in right subtree
            if (node.right != null) {
                return minNode(node.right);
            }
            
            // 2. Search till a parent is found whose left subtree has curr node
            temp = node.parent;
            while (temp != null && temp.right === node) {
                node = temp;
                temp = temp.parent;
            }
            return temp;
        }
    }
    
    // Checks if a tree is a binary search tree
    function isBinarySearchTree(root) {
        // Assumes: all keys are different. 
        // In order traversal should have keys in increasing order
        // Convert string array to int array
        var inorderArr = inorderRecursive1(root).split(' ').map(function (x) {
            return parseInt(x, 10); // ParseInt extracts integer from a string
        });

        for (var i = 1; i < inorderArr.length; i++) {
            if (inorderArr[i - 1] > inorderArr[i]) {
                return false
            }
        }
        return true;
    }

    function isBinarySearchTree2(root) {

        return isBSTInteral(root, -Infinity, Infinity);

        function isBSTInteral(node, min, max) {
            if (node) {
                if (node.data >= min && node.data <= max) {
                    return isBSTInteral(node.left, min, node.data) && isBSTInteral(node.right, node.data, max);
                } else {
                    return false;
                }
            }
            return true;
        }
    }
    
    
    // Minimum node
    function minNode(node) {
        while (node && node.left) {
            node = node.left;
        }
        return node;
    }

}
    (window.ds));

function getBSTTest1() {
    var bst = new window.ds.BST();
    var values = [15, 6, 18, 3, 7, 17, 20, 2, 4, 13, 9];

    values.forEach(function (x) {
        bst.insert(x);
    }
        );
    return bst.root;
}

// test
var bst = new window.ds.BST();
var testRoot = getBSTTest1();

// "2 3 4 6 7 9 13 15 17 18 20"
bst.inorderIterative(testRoot)
bst.inorderRecursive1(testRoot)
bst.inorderRecursive2(testRoot)
