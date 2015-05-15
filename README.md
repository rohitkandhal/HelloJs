##Hello JS  

1. For Objects, Classes and Prototypes. [[classbasics.js](js/classbasics.js)]
2. For Arrays and Dictionaries. [[arrays.js](js/arrays.js)]
3. For Function constructor and it's methods. [[functions.js](js/functions.js)]
4. For String related questions. [[stringbasics.js](js/stringbasics.js)]
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

There is no restriction on number of arguments being passed. _e.g. You can declare a function with no arguments but still you can send as many arguments you like. Arguments are accessible via **arguments** object._

**No Overloading**: If two functions are defined to have the same name, it is the last function that becomes the owner of that name. Tip: Use arguments.length to support Method Overloading.

###Credits
1. Effective Javascript
2. [toptal](www.toptal.com)
