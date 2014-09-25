Hello Js
=======

Learning Java Script - A magic language

####Good JS excerpts 

1. **With** statements
2. There is no restriction on number of arguments being passed. _e.g. You can declare a function with no arguments but still you can send as many arguments you like. Arguments are accessible via **arguments** object._
3. **No Overloading**: If two functions are defined to have the same name, it is the last function that becomes the owner of that name. Tip: Use arguments.length to support Method Overloading.
4. Unlike other programming languages, **string** is a primitive data type instead of a reference data type. 
5. Only _reference values_ can have properties defined dynamically for later use.
6. Understanding reference arguments - _they are nothing more than local variables_: 
7. ```javascript  
function addName(obj){
  obj.lastName = "Kandhal";
  
  obj = new Object();
  obj.lastName = "Some Random";
}
var person = new Object();
document.write(person.lastName);    // Output: Undefined
addName(person);
document.write(person.lastName);   // Output: Kandhal
