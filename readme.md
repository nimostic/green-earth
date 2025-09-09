1. Difference between var, let, and const:
var → function-scoped, can be redeclared, old way.
let → block-scoped, can be updated but not redeclared.
const → block-scoped, cannot be reassigned.

2. Difference between map(), forEach(), and filter():

map() → returns a new array with modified values.
forEach() → loops through elements, no return.
filter() → returns a new array with elements that pass a condition.

3.Arrow functions in ES6:
Shorter way to write functions using =>, and they inherit this.
Example: let add = (a, b) => a + b;

4. Destructuring assignment in ES6:
Unpacks values from arrays or objects.
Example:
let [x, y] = [1, 2];  
let {name, age} = {name: "Riyad", age: 22};

5. Template literals in ES6 vs concatenation:
Use backticks (`).
Support ${} for variables and multi-line strings.
Example:
`Hello, ${name}` 
"Hello, " + name  
