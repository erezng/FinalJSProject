import { Color, capRGB } from "./color.js";
import {
  red,
  green,
  blue,
  boxstr,
  boxstr2,
  inputstr,
  br,
  pointer,
  click,
} from ".././conststring.js";
const redInput = document.getElementById(red) as HTMLInputElement;
const greenInput = document.getElementById(green) as HTMLInputElement;
const blueInput = document.getElementById(blue) as HTMLInputElement;
const box = document.getElementById(boxstr) as HTMLDivElement;
const box2 = document.getElementById(boxstr2) as HTMLDivElement;

const allInputs = [redInput, greenInput, blueInput];

allInputs.forEach((i) => {
  i.addEventListener(inputstr, (e) => {
    rgb();
  });
});

function rgb() {
  const [red, green, blue] = capRGB(
    Number(redInput.value),
    Number(greenInput.value),
    Number(blueInput.value)
  );
  const c = new Color(red, green, blue);
  const hexColor = c.hex();
  const rgbColor = c.rgb();
  box.innerHTML = rgbColor + br + hexColor;
  box.style.background = rgbColor;
  return c;
}

box.style.cursor = pointer;
box.addEventListener(click, () => {
  box2.innerHTML = box.innerHTML;
  box2.style.background = box.style.background;
});
