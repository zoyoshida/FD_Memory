const emojis = [
  "🧌",
  "🧚‍♀️",
  "🖤",
  "🪦",
  "🧑‍🦽‍➡️",
  "🧟‍♀️",
  "🫂",
  "🦧",
  "🦟",
  "🫙",
  "🍄",
  "🗿",
  "🧌",
  "🧚‍♀️",
  "🖤",
  "🪦",
  "🧑‍🦽‍➡️",
  "🧟‍♀️",
  "🫂",
  "🦧",
  "🦟",
  "🫙",
  "🍄",
  "🗿",
];

let firstChoice = null;
let secondChoice = null;

// crée une variable board, qui a pour valeur l'élément HTML qui répond au sélecteur #board
const board = document.querySelector("#board");

//shuffle algorithm
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

shuffle(emojis).forEach((emoji) => {
  // crée un élément HTML <div>, sauvegardé dans une variable s'appelant card
  const card = document.createElement("div");
  card.classList.add("card", "hidden");
  card.dataset.emoji = emoji;

  // écoute le clic sur la carte
  card.addEventListener("click", () => {
    console.log("click");

    if (firstChoice === null) {
      firstChoice = card;
      card.classList.remove("hidden");
    } else if (secondChoice === null) {
      secondChoice = card;
      card.classList.remove("hidden");
    } else {
    }
  });

  // ajout de notre carte ("card") au plateau de jeu ("board")
  board.appendChild(card);
});
