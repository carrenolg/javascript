import { PI, EULER } from "./constans.js";
import { multiplicar, sumar, restar } from "./actions.js";
import Hola, { a, b, saludar, saludarDefault } from "./default.js";

// export constants
console.log("Import JS modules");
console.log(PI);
console.log(EULER);

// export actions or functions
console.log(sumar(5, 5));
console.log(restar(5, 5));
console.log(multiplicar(5, 5));

// export default
console.log(a);
console.log(b);
console.log(saludar());
console.log(saludarDefault());
const obj = new Hola();
