import { animalShow, div, btnStrt, animalChosenImg, animalChosen, img, col, click, } from "./../conststring.js";
import { Utils } from "../utils.js";
import { animalArray } from "./runners.js";
const animalShowCase = document.getElementById(animalShow);
let animalstart = document.createElement(div);
const btnStart = document.getElementById(btnStrt);
const win = document.getElementById("winner");
btnStart.addEventListener(click, () => {
    //remove animals movement
    animalArray.forEach((animal) => {
        animal.isChosen = false;
        animal.translateX = 0;
    });
    //remove class from html
    document
        .querySelectorAll(animalChosenImg)
        .forEach((img) => img.classList.remove(animalChosen));
    const random = Utils.random(0, animalArray.length);
    //chose randomaly animal
    const chosenAnimal = animalArray[random];
    chosenAnimal.isChosen = true;
    const img = document.getElementById(chosenAnimal.id);
    img.classList.add(animalChosen);
    animalShowCase.classList.add("flex-col");
    let id;
    const animalRace = document.querySelectorAll(`#animal-show-case img`);
    console.log(animalRace);
    setTimeout(() => {
        const audio = new Audio(`./media/${chosenAnimal.voice}.wav`);
        audio.play();
        id = setInterval(() => {
            animalArray.forEach((animal) => {
                if (animal.name !== "horse")
                    animal.translateX =
                        animal.translateX + animal.step + Utils.random(0, 25);
                else
                    animal.translateX += animal.step;
                console.log(animal.translateX);
                animalRace.forEach((a, i) => {
                    let animalImage = a;
                    let animal = animalArray[i];
                    if (animal.translateX < 1001) {
                        animalImage.style.transform = `translateX(${animal.translateX}px)`;
                    }
                    else {
                        clearInterval(id);
                        win.innerText = "Horse wins!";
                    }
                });
            });
            //   chosenAnimal.translateX += chosenAnimal.step * 10;
            //   img.style.transform = `translateX(${chosenAnimal.translateX}px)`;
            if (img.getBoundingClientRect().x >
                document.body.getBoundingClientRect().width) {
                clearInterval(id);
                //resetGame()
            }
        }, 1000);
    }, 1000);
});
//present animals
Display();
function Display() {
    animalArray
        .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
        .map((animal) => {
        const image = document.createElement(img);
        image.src = `../images/${animal.img}`;
        image.classList.add(col, "image-fuild");
        image.id = animal.id;
        return image;
    })
        .forEach((img) => {
        animalShowCase.appendChild(img);
    });
}
