window.sort = window.sort || {};

(function(ns) {

    // Public interface
    ns.insertionSort = insertionSort;
    ns.mergeSort = mergeSort;
    ns.heapSort = heapSort;
    ns.isHeap = isHeap;

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
        var heapSize = inp.length;
        
        buildHeap(inp, inp.length);
        for (var i = 0; i < inp.length-1; i++) {
            swapArrItems(inp, 0, heapSize - 1);
            // console.log("Move root to end", inp);
            heapSize--;
            heapify(inp, 0, heapSize);
            // console.log("Heapify: ", inp);
        }
        return inp;
    }

    // Part 2: 
    function buildHeap(inp, heapSize) {
        for (var i = (heapSize / 2) - 1; i >= 0; i--) {
            heapify(inp, i, heapSize);
        }
        return inp;
    }

    // Part 3: Puts arr[root] to right place in heap
    // NOTE: all heap algo assume index to start from 1 but this is 
    // implemented using 0 - arr based element index
    function heapify(arr, root, heapSize) {
        var left, right, largest;
        
        if (!heapSize) {
            heapSize = arr.length;
        }
        
        left = 2 * root + 1; // assuming root is 0 based index
        right = 2 * root + 2;
        
        if (left < heapSize && arr[left] > arr[root]) {
            largest = left;
        } else {
            largest = root;
        }
        
        if (right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }
        
        if (largest !== root) {
            swapArrItems(arr, largest, root);
            return heapify(arr, largest, heapSize)
        }
        return arr;
    }

    // Part 4: Verifies if an array is max heap
    function isHeap(inp) {
        for (var i = (inp.length / 2 - 1); i >= 0; i--) {
            // root should be greater than both left and right node
            if (inp[i] < inp[leftHeapNode(i)] || 
            inp[i] < inp[rightHeapNode(i)]) {
                return false;
            }
        }
        return true;
    }
    
    function leftHeapNode(i) {
        return 2 * i + 1;
    }
    
    function rightHeapNode(i) {
        return 2 * i + 2;
    }
    
    function swapArrItems(arr, source, target) {
        var temp;
        if (arr[source] && arr[target]) {
            temp = arr[source];
            arr[source] = arr[target];
            arr[target] = temp;
        }
        return arr;
    }

})(window.sort);

var testArr = [5, 2, 4, 6, 1, 3];
var testArrEmpty = [];
var testArrSame = [5, 5, 5];
var testHeap = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
var testHeapBuild = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
var testHeapValid = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
var testHeap2 = [23, 17, 14, 6, 13, 10, 1, 5, 7, 12];

//window.sort.insertionSort(testArr);
//window.sort.mergeSort(testArr, 0, testArr.length);
window.sort.heapSort(testArr);
//window.sort.isHeap(testHeapValid);

