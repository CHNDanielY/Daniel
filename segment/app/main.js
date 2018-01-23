
import './main.css';
const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());
var nodes = '<div class={styles.root}>fssf</div>';
document.querySelector("#root").innerHTML=nodes;
var element = document.createElement("h1");
// element.className = styles.redButton;
element.innerHTML = "Hello webpack";
document.querySelector("#root").appendChild(element);

