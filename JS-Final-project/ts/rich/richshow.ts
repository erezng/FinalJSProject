import { div, click } from "./../conststring.js";
import { json_ar as richarr } from "../rich/rich.js";
const richplace = document.getElementById("richers") as HTMLDivElement;
//show the rich people
function Display() {
  richarr.map((r) => {
    const cardDiv = document.createElement(div);
    const cardRich = `
            <div class="card rich-man-card m-2">
            <img class="card-img-top" src=${r.image} alt="Card image cap">
            <div class="card-body">
            <h1>${r.name}</h1>
            <p>Born:${r.birth_year}</p>
            <div class="row">
            <div class="col-sm">
            Net worth:${r.worth}
            </div>  
            <div class="col-sm">
            Own: ${r.source}
            </div>
            <div class="col-sm">
            From:${r.country}            
            </div>
              </div>
            `;
    cardDiv.id = `${r.name}`;
    cardDiv.innerHTML = cardRich;
    richplace?.appendChild(cardDiv);
    cardDiv.addEventListener(click, () => {
      richarr.filter((c) => {
        c !== r;
      });
      document.getElementById(cardDiv.id)?.remove();
    });
  });
}

Display();
//delete on click
