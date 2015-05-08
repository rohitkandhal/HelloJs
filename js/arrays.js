// ARRAYS and DICTIONARIES

// 1.1 Sparse Arrays (arrays with holes)
var a1 = new Array(3);

// forEach function doesn't iterate over undefined values
// Output: Doesn't print anything
a1.forEach(function(x,i) {
    console.log(i+ ". " + x);
})

// 1.2 Dense Arrays (arrays without holes)
var a2 = Array.apply(null, new Array(3));
// Output: Prints 3 elements
a2.forEach(function(x,i) {
    console.log(i+ ". " + x);
})