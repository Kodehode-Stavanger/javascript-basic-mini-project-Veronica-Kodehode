const twelve = document.querySelector("#play");
twelve.addEventListener("click", playCards);

const cards = [
  "purple",
  "yellow",
  "red",
  "green",
  "blue",
  "pink",
  "orange",
  "teal",
  "brown",
  "grey",
  "white",
  "lightblue",
];

// duplicate array

const duplicated = [...cards, ...cards];

// function to run when button clicked

function playCards() {
  // while loop to clear cards before generating new cards

  while (playarea.firstChild) {
    playarea.removeChild(playarea.firstChild);
  }

  // for loop to randomize duplicated array

  for (let i = duplicated.length - 1; i > 0; i--) {
    let a = Math.floor(Math.random() * (i + 1));
    let b = duplicated[i];
    duplicated[i] = duplicated[a];
    duplicated[a] = b;
  }

  // loop to generate cards, styled

  for (let i = 0; i < duplicated.length; i++) {
    let cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    playarea.appendChild(cardContainer);

    let card = document.createElement("div");
    card.className = "card";
    card.style.backgroundColor = duplicated[i];
    cardContainer.appendChild(card);

    let back = document.createElement("div");
    back.className = "back";
    cardContainer.appendChild(back);
  }
}

// conditionals
