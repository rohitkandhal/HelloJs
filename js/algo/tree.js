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

window.tree = window.tree || {};

(function(ns) {
    
    ns.BST = BST;
    
    function BST(data, left, right, parent) {
        this.data = data || undefined;
        this.left = left || undefined;
        this.right = right || undefined;
        this.parent = parent || undefined;
    }

    // Inorder traversal - recursion
    var inorderTraverse = function(root) {
        var out = '';
        if (root != null) {
            out += inorderTraverse(root.left);
            out += root.data + ' ';
            out += inorderTraverse(root.right);
        }
        return out;
    }

    // Inorder traversal using stack
    var inorderTraverseIterative = function(root) {
        var stack = [];
        var curr = root;
        var out = '';
        
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        
        while (stack.length !== 0) {
            curr = stack.pop();
            out += curr.data + " ";
            
            if (curr.right != null) {
                curr = curr.right;
                while (curr != null) {
                    stack.push(curr);
                    curr = curr.left;
                }
            }
        }
        return out;
    }
    
    // Binary Search iterative
    var searchIterative = function(root, key) {
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
    
    var successor = function(node) {
        if(node != null) {
            var temp;

            if(node.right != null) {
                return treeMinimum(node.right);
            }
            temp = node.parent;
            while(temp != null && temp.right === node) {
                node = temp;
                temp = temp.parent;
            }
            return temp;
        }
    }

    var treeMinimum = function(node) {
        while(node != null && node.left != null) {
            node = node.left;
        }
        return node;
    }
    
    var getTestTree = function() {
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
    };
    
    BST.prototype.getTestTree = getTestTree;
    BST.prototype.inorderTraverse = inorderTraverse;
    BST.prototype.inorderTraverseIterative = inorderTraverseIterative;
    BST.prototype.searchIterative = searchIterative;
    BST.prototype.successor = successor;
    BST.prototype.treeMinimum = treeMinimum;
}(window.tree))

// test
var bst = new window.tree.BST();
var testTree = bst.getTestTree();
//bst.inorderTraverse(testTree);
//bst.inorderTraverseIterative(testTree);
//testTree.searchIterative(testTree, 6);
//testTree.treeMinimum(testTree);
testTree.successor(testTree);
