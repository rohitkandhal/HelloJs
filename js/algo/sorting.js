window.sort = window.sort || {};

(function(ns) {

    // Public interface
    ns.insertionSort = insertionSort;
    ns.mergeSort = mergeSort;
    ns.heapSort = heapSort;
    // Internal

    // 1. Insertion Sort algo
    function insertionSort(arr) {
        var i, j, temp;
        for (i = 1; i < arr.length; i++) {
            temp = arr[i];
            
            for (j = i; j > 0 && arr[j - 1] > temp; j--) {
                arr[j] = arr[j - 1];
            }
            arr[j] = temp;
        }
        return arr;
    }

    // 2. Merge Sort
    function mergeSort(inp, start, end) {
        var arr1 = arr2 = arr3 = [];

        // Base case 
        // 1. When there is only one element in an array
        if (start === end && start < inp.length) {
            arr3[0] = inp[start];
        } 
        else if (start < end) {
            // Else recurse 
            var mid = Math.floor((start + end) / 2);
            
            arr1 = mergeSort(inp, start, mid);
            arr2 = mergeSort(inp, mid + 1, end);
            arr3 = mergeInternal(arr1, arr2);
            console.log(arr1, arr2, arr3);
        }
        return arr3;
    }

    // Merges two sorted arrays
    function mergeInternal(arr1, arr2) {
        arr1 = arr1 || [];
        arr2 = arr2 || [];
        
        var n1 = arr1.length, 
        n2 = arr2.length;
        var i = j = k = 0;
        
        var result = [];
        while (k < (n1 + n2)) {
            if ((j >= n2 && i <= n1) || arr1[i] <= arr2[j]) {
                result[k] = arr1[i];
                i++;
            } else {
                result[k] = arr2[j];
                j++;
            }
            k++;
        }
        
        return result;
    }

    // 3. Heap sort
    function heapSort(inp) {
        // Heap indexes start with 1
        inp.unshift(0);
        return heapify(inp, 2);
    }

    // Fixes heap
    function heapify(arr, root) {
        var left, right, largest;
        
        left = 2 * root;
        right = 2 * root + 1;
        
        if (arr[left] && arr[left] > arr[root]) {
            largest = left;
        } else {
            largest = root;
        }
        
        if (arr[right] && arr[right] > arr[largest]) {
            largest = right;
        }
        
        if (largest !== root) {
            swapArrItems(arr, largest, root);
            return heapify(arr, largest)
        }
        return arr;
    }
    
    function swapArrItems(arr, source, target) {
        var temp;
        if(arr[source] && arr[target]) {
            temp = arr[source];
            arr[source] = arr[target];
            arr[target] = arr[source];
        }
        return swapArrItems;
    }

})(window.sort);


var testArr = [5, 2, 4, 6, 1, 3];
var testHeap = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];

//window.sort.insertionSort(testArr);
//window.sort.mergeSort(testArr, 0, testArr.length);
window.sort.heapSort(testHeap);
