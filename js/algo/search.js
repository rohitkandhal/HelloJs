window.search = window.search || {};

(function(ns) {

    // Public interface
    ns.binarySearch = binarySearch;
    ns.binarySearchRecur = binarySearchRecur;

    function binarySearch(arr, search) {
        var start, end, i, mid;
        
        start = 0;
        end = arr.length;

        while(start < end) {
            mid = Math.floor((start + end) / 2);
            if(arr[mid] === search) {
                return true;
            } else if (arr[mid] > search) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return false;
    }
    
    function binarySearchRecur(arr, x, start, end) {
        if(start > end) {
            return false;
        }

        var mid = start + Math.floor((end - start)/2);

        if(arr[mid] === x) {
            return true;
        } else if (arr[mid] < x) {
            return binarySearchRecur(arr, x, mid + 1, end);
        } else {
            return binarySearchRecur(arr, x, start, mid - 1);
        }
    }

})(window.search);

var arr = [0,3,6,8];
var arr1 = [0,3,6,8,10];
var arr2 = [0];
var testArr = [arr];
var searchItems = [0,1,2,3,4,5,6,7,8,9,10,11,12];


//window.sort.insertionSort(testArr);
// window.search.binarySearch(testArr, 5)

testArr.forEach(function (arr) {
    searchItems.forEach(function (x) {
        console.log(arr, x, window.search.binarySearchRecur(arr, x, 0, arr.length));    
    });
})