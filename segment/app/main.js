import "./index.tmpl.html";
import styles from './main.css';
import './first.scss';
const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());
var nodes = '<div class="'+styles["roott"]+'">fssf</div>';
// var nodes='<h2 class="' + styles.roott + '">a title for CSS Modules</h2>';
document.querySelector("#root").innerHTML=nodes;
var element = document.createElement("h1");
// element.className = styles.redButton;
element.innerHTML = "Hello webpack";
document.querySelector("#root").appendChild(element);

