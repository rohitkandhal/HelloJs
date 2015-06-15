 // Greedy algorithms

window.greedy = window.greedy || {};

(function(ns) {

    // Activity selection problem using greedy approach. p415 Cormen
    ns.taskSelector = taskSelector;

    // Tasks: [{start, end}, {start,end}]
    function taskSelector(tasks) {
        var selected = [], 
        i, curr;
        
        if (tasks.length !== 0) {
            curr = 0; // Select first activity
            selected.push(curr);
            
            for (i = 1; i < tasks.length; i++) {
                if (tasks[i].start >= tasks[curr].end) {
                    curr = i;
                    selected.push(curr);
                }
            }
        }
        return printSelectedTasks(tasks, selected);
    }
    
    function printSelectedTasks(tasks, selectedTasks) {
        var i, out= '';
        
        for (i = 0; i < selectedTasks.length; i++) {
            out += 'id:' + selectedTasks[i];
            out += ' <' + tasks[selectedTasks[i]].start + '-' + tasks[selectedTasks[i]].end + '>\n';
        }
        return out;
    }

}(window.greedy));

var testTasks = [{start: 1,end: 4}, {start: 3,end: 5}, {start: 0,end: 6}, {start: 5,end: 7}, {start: 3,end: 9}, 
    {start: 5,end: 9}, {start: 6,end: 10}, {start: 8,end: 11}, {start: 8,end: 12}, {start: 2,end: 14}, {start: 12,end: 16}];

window.greedy.taskSelector(testTasks);
