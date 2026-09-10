const emojis = [
  "🧌",
  "🧚‍♀️",
  "📦",
  "🪦",
  "🧑‍🦽‍➡️",
  "🌞",
  "🫂",
  "🦧",
  "🦟",
  "🫙",
  "🍄",
  "🗿",
  "🧌",
  "🧚‍♀️",
  "📦",
  "🪦",
  "🧑‍🦽‍➡️",
  "🌞",
  "🫂",
  "🦧",
  "🦟",
  "🫙",
  "🍄",
  "🗿",
];

let firstChoice = null;
let secondChoice = null;
let pairFound = 0;
let playerATurn = true;

// player scores

let playerAScore = 0;
let playerBScore = 0;

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
  const card = document.createElement("button");
  card.classList.add("card", "hidden");
  card.dataset.emoji = emoji;

  // Tracker tour et cartes chargé pour la première fois

  document.querySelector("#pairFound").innerHTML =
    `There's ${pairFound} pair found`;

  document.querySelector("#playerTurn").innerHTML = `>> Player A turn`;

  document.querySelector("#playerAScore").innerHTML = `${playerAScore}`;
  document.querySelector("#playerBScore").innerHTML = `${playerBScore}`;

  // écoute le clic sur la carte
  card.addEventListener("click", () => {
    // première carte retournée
    if (firstChoice === null && card.classList.contains("hidden") == true) {
      firstChoice = card;
      card.classList.remove("hidden");
      card.classList.add("firstCard");
      console.log("first card");
    }

    // seconde carte retournée
    else if (
      secondChoice === null &&
      card.classList.contains("hidden") == true
    ) {
      secondChoice = card;
      card.classList.remove("hidden");
      card.classList.add("secondCard");
      console.log("second card");

      //comparaison des deux cartes

      const firstCard = document.querySelector(".firstCard");
      const secondCard = document.querySelector(".secondCard");

      // Pair trouvée

      if (firstCard.dataset.emoji == secondCard.dataset.emoji) {
        console.log("OI YOU GOT A PAIR");

        // update des trackers
        pairFound += 1;
        document.querySelector("#pairFound").innerHTML =
          `There's ${pairFound} pair found`;
        console.log("there's " + pairFound + " pair found !");
        if (playerATurn == true) {
          playerAScore += 1;
          document.querySelector("#playerAScore").innerHTML = `${playerAScore}`;
        } else {
          playerBScore += 1;
          document.querySelector("#playerBScore").innerHTML = `${playerBScore}`;
        }

        // retire les cartes du jeu
        setTimeout(() => {
          firstCard.classList.add("disabled");
          firstCard.classList.remove("firstCard");

          secondCard.classList.add("disabled");
          secondCard.classList.remove("secondCard");

          firstChoice = null;
          secondChoice = null;
        }, 500);
      }

      // Pair pas trouvée
      else {
        console.log("bruh");

        //reset des deux cartes
        setTimeout(() => {
          firstCard.classList.add("hidden");
          firstCard.classList.remove("firstCard");

          secondCard.classList.add("hidden");
          secondCard.classList.remove("secondCard");

          firstChoice = null;
          secondChoice = null;

          playerATurn = !playerATurn;
          console.log(playerATurn);

          //Changement de tour

          if (playerATurn == true) {
            document.querySelector("#playerTurn").innerHTML =
              `>> Player A turn`;
          } else {
            document.querySelector("#playerTurn").innerHTML =
              `>> Player B turn`;
          }
        }, 500);
      }
    } else {
    }
  });

  // ajout de notre carte ("card") au plateau de jeu ("board")
  board.appendChild(card);
});
