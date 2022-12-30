import { click, inputstr as inputstr, addbtn, nameitem, } from "./../conststring.js";
("use strict");
const input = document.getElementById("sweat-input");
let output = document.getElementById(inputstr);
const namesUL = document.querySelector(".name-list");
const add = document.getElementById(addbtn);
let names = [];
add.addEventListener(click, () => {
    let t;
    t = input.value;
    names.push(t);
    console.log(names);
});
output.addEventListener(inputstr, () => {
    document.querySelectorAll(nameitem).forEach((e) => e.remove());
    const inputValue = output.value.toLowerCase();
    if (inputValue.length === 0) {
        return;
    }
    names.sort();
    const filteredNames = names.filter((name) => name.toString().toLowerCase().startsWith(inputValue));
    const liArray = filteredNames.map((n) => {
        const li = document.createElement("li");
        li.classList.add(nameitem);
        li.innerText = n;
        return li;
    });
    liArray.forEach((li) => namesUL.appendChild(li));
});
