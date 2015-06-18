 // Priority Queue

// 1. Use heapSize instead of length to keep it 'in-place' algo
window.ds = window.ds || {};

(function(ns) {
    
    ns.PriorityQueue = PriorityQueue;
    
    function PriorityQueue() {
        this.data = [];
        this.data.heapSize = 0;

        // Add

        // Remove

        // Decrease Key

        // Build Queue for an array
        return this;
    }

    // 3|6|7|11|13|15|18
    // 0|1|2| 3| 4| 5| 6
    PriorityQueue.prototype.buildHeap = buildHeap;
    PriorityQueue.prototype.buildHeapFromArray = buildFromArray;
    PriorityQueue.prototype.isMinHeap = isMinHeap;
    
    function buildHeap() {
        var i;
        for (i = (this.data.heapSize / 2).toFixed(0) - 1; i >= 0; i--) {
            minHeapify(this.data, i);
        }
        return this.data;
    }
    
    function buildFromArray(arr) {
        this.data = arr.slice(); // copy array by value
        this.data.heapSize = this.data.length;
        return this.buildHeap();
    }
    
    function minHeapify(heap, id) {
        var smallest, l, r;
        if (heap) {
            l = leftChild(id);
            r = rightChild(id);
            
            if (l < heap.heapSize && heap[l] < heap[id]) {
                smallest = l;
            } else {
                smallest = id;
            }
            
            if (r < heap.heapSize && heap[r] < heap[smallest]) {
                smallest = r;
            }
            
            if (smallest !== id) {
                swap(heap, smallest, id);
                minHeapify(heap, smallest);
            }
        }
    }
    
    function swap(heap, item1, item2) {
        var temp = heap[item1];
        heap[item1] = heap[item2];
        heap[item2] = temp;
        return temp;
    }
    
    function leftChild(i) {
        return 2 * i + 1;
    }
    function rightChild(i) {
        return 2 * i + 2;
    }

    // Verifies if it is a min heap. Verifies on data array or argument
    function isMinHeap(inp) {
        
        var heap = inp || this.data;
        for (var i = ((heap.length / 2).toFixed(0) - 1); i >= 0; i--) {
            // root should be less than both left and right node
            if (heap[i] > heap[leftChild(i)] || 
            heap[i] > heap[rightChild(i)]) {
                return false;
            }
        }
        return true;
    }
}(window.ds));

var testHeapBuild = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

var testArr = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
var validMaxHeap = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
var validMinHeap = [1, 2, 3, 8, 4, 9, 10, 14, 16, 7];
var pQueue = new window.ds.PriorityQueue();
pQueue.buildHeapFromArray(testArr);
pQueue.isMinHeap([1,2,54,74,75,76,94]);
