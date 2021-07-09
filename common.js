import {sum} from './calc.js';
// import {age,name}  from "./user.js"; => result vars name + age
import * as user from "./user.js"; // => {name: ..., age: ...}

import User from './part.js';

console.log(sum(1,2));

console.log(user);
console.log(user.name);

console.log(User);