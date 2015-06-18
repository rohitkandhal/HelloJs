 // Priority Queue

// 1. Use heapSize instead of length to keep it 'in-place' algo
window.ds = window.ds || {};

(function(ns) {
    
    ns.PriorityQueue = PriorityQueue;
    
    function PriorityQueue() {
        var data = [];
        data.heapSize = 0;

        // Add

        // Remove

        // Decrease Key

        // Build Queue for an array
        function buildFromArray(arr) {
            data = arr.slice(); // copy array by value
            data.heapSize = data.length;
        
        }
        return this;
    }
    
    Object.defineProperty(PriorityQueue, {
        'data': {
            get: function() {
                return data;
            }
        }
    });

    // 3|6|7|11|13|15|18
    // 0|1|2| 3| 4| 5| 6
    PriorityQueue.prototype.buildHeap = function() {
        var i;
        for (i = (this.data.heapSize / 2).toFixed(0) - 1; i >= 0; i--) {
            minHeapify(this.data, i);
        }
    }
    
    function minHeapify(heap, id) {
        var smallest, l, r;
        if (heap) {
            l = leftChild(i);
            r = rightChild(i);
            
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
                minHeapify(smallest);
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
}(window.ds));
