window.sort = window.sort || {};

(function (ns) {

    ns.insertionSort = insertionSort;
    
    function insertionSort (arr) {
        var i, j, temp;
        for(i = 1; i < arr.length; i++) {
            temp = arr[i];

            for(j = i; j > 0 && arr[j-1] > temp; j--){
                arr[j] = arr[j-1];
            }
            arr[j] = temp;
        }
        return arr;
    }

})(window.sort);


var testArr = [5, 2, 4, 6, 1, 3];

window.sort.insertionSort(testArr);