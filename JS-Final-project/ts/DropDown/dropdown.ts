import {
  click,
  inputstr as inputstr,
  addbtn,
  nameitem,
} from "./../conststring.js";
("use strict");
const input = document.getElementById("sweat-input") as HTMLInputElement;
let output = document.getElementById(inputstr) as HTMLInputElement;
const namesUL = document.querySelector(".name-list") as HTMLUListElement;
const add = document.getElementById(addbtn) as HTMLButtonElement;
let names: string[] = [];

add.addEventListener(click, () => {
  let t: string;
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

  const filteredNames = names.filter((name) =>
    name.toString().toLowerCase().startsWith(inputValue)
  );

  const liArray = filteredNames.map((n) => {
    const li = document.createElement("li");
    li.classList.add(nameitem);
    li.innerText = n;
    return li;
  });
  liArray.forEach((li) => namesUL.appendChild(li));
});
