var s_primitive = 'foo';    // String Literal
var s_obj = new String(s_prim); // String Object

// 1. String to array conversion
var str1 = "1,2";
var arr1 = JSON.parse("[" + str1 + "]");    // arr1 = [1,2]
var arr2 = str1.split(",");     // arr2 = ["1", "2"]