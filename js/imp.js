// Source: http://www.ardendertat.com/2012/01/09/programming-interview-questions/
// Question 1. Given an integer array, output all pairs that sum up to a specific value k.
// [1, 1, 2, 3, 4]

function pairSum1(arr, k) {
    var start, end, v1, v2;

    if(arr.length < 2) {
        return -1;
    }

    arr.sort(compareAscending);

    start = 0;
    end = arr.length - 1;

    while(start < end) {
        v1 = arr[start];
        v2 = arr[end];

        if(v1 + v2 === k) {
            console.log(v1, v2);
            start++;
        } else if (v1 + v2 < k) {
            start++;
        } else {
            end--;
        }
    }
}

function compareAscending(val1, val2) {
    if(val1 < val2) {
        return -1;
    } else if(val1 > val2) {
        return 1;
    } else {
        return 0;
    }
}

var testArr = [2, 1, 1, 4, 3];

function pairSum2(arr, k) {
    var seen = {} , i, target, curr, output = [];

    for(i = 0; i < arr.length; i += 1) {
        curr = arr[i];
        target = k - curr;

        if(seen[target] === undefined) {
            seen[curr] = true;
        } else {
            output.push([curr, target]);
        }
    }

    return output;
}

// Question 2: Matrix Region Sum: Given a matrix of integers and coordinates of a rectangular 
// region within the matrix, find the sum of numbers falling inside the rectangle. 
// Our program will be called multiple times with different rectangular regions 
// from the same matrix.

function matrixSum(matrix, topLeft, bottomRight){

}

// Question 3: Largest Continuous Sum
//Given an array of integers (positive and negative) find the largest continuous sum.
function largestContinuousSum(arr) {
    var currSum = 0, maxSum = 0, i;
    var tStart = 0, startPos, endPos;
    
    for(i = 0; i < arr.length; i += 1) {
        currSum += arr[i];

        if(currSum > maxSum) {
            maxSum = currSum;            
        }
        if(currSum < 0) {
            currSum = 0;
        }
    }
    return maxSum;
}

var testSum1 = [1, 2, 3, 4, -6, 7, 7, 7];

// Question 4: Linked List Remove Nodes
// Given a linkedlist of integers and an integer value, delete every node of the linkedlist containing that value.
function removeLinkedList(node) {

    // 
}