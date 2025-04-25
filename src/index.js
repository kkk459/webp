import './index.css';
import { a, b, c, d, add } from "./a";

console.log(a, b, c, d, add(1, 2));

const arr = [1, 2, 3, 4, 5];

arr.map((item) => item + 1);

document.getElementById('root').textContent = 'Hello Webpack!';
import myImage from './img.jpg';
// debugger
document.querySelector('img').src = myImage;