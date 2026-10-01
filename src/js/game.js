function new_game() {
  document.getElementsByClassName("card").remove;

  shuffle(emojis.slice(0, cardDeckSize)).forEach((emoji) => {
    // crée un élément HTML <div>, sauvegardé dans une variable s'appelant card
    const card = document.createElement("button");
    card.classList.add("card", "hidden");
    card.dataset.emoji = emoji;

    // Tracker tour et cartes chargé pour la première fois

    document.querySelector("#playerTurn").innerHTML = `>> Player A turn`;

    document.querySelector("#playerAScore").innerHTML = `${playerAScore}`;
    document.querySelector("#playerBScore").innerHTML = `${playerBScore}`;

    // ajout de notre carte ("card") au plateau de jeu ("board")
    board.appendChild(card);

    // écoute le clic sur la carte
    card.addEventListener("click", () => {
      // première carte retournée
      if (firstChoice === null && card.classList.contains("hidden") == true) {
        audioCardFlip.play();
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
        audioCardFlip.play();
        secondChoice = card;
        card.classList.remove("hidden");
        card.classList.add("secondCard");
        console.log("second card");

        //comparaison des deux cartes

        const firstCard = document.querySelector(".firstCard");
        const secondCard = document.querySelector(".secondCard");

        // Pair trouvée

        if (firstCard.dataset.emoji == secondCard.dataset.emoji) {
          console.log("That's more like it!");
          audioNice5.play();

          //nice sound
          if (combo == 0) {
            audioNice.play();
            show_image(
              "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmoxajlqN3dmc3Q3NHd1bWMzNWR5OXN5MnJzaHh6bnZnaGowNDVldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UuzwffmvtBNGjYyEUe/giphy.gif",
              200,
              200,
              "cat gif",
            );
          } else if (combo == 1) {
            audioNice2.play();
          } else if (combo == 2) {
            audioNice1.play();
            show_image(
              "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXQ1dG16dWg0MDFncWc1eGpjOXh4aGlxYmhicnpobnNzN3RyNzZrciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QyWBTLDn9WHt0FXGJS/giphy.gif",
              400,
              200,
              "jojo nice",
            );
          } else if (combo == 3) {
            audioNice3.play();
          } else if (combo == 4) {
            audioNice4.play();
            show_image(
              "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnpzMWs0dWdteGxoYmYxMjJ1YjN5Mm85YjNmMTRmZnRkZHN0bG1veiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/111ebonMs90YLu/giphy.gif",
              200,
              200,
              "nice",
            );
          } else if (combo == 7) {
            audioSUS.play();
            show_image(
              "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTN6czZ3eTIzMGMycWNudHhscDk3cml2eWQzdGY0NTdqbmx3cmgydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/21VTFJTEr1x9ortvO3/giphy.gif",
              200,
              200,
              "that's sus",
            );
          } else if (combo == 8) {
            audioSUS.play();
            show_image(
              "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGZ4MHBod2NnNmVyMmg0OTg0NmxydnUyNzRweWZ2enFqN3I3b3dodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/brYjDJ2FUjn1KL3Pzw/giphy.gif",
              200,
              200,
              "ur sus",
            );
          } else if (combo == 10) {
            audioSUS.play();
            audioSUS2.play();
            show_image(
              "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3c1YjF6bmR5cGRwd2xzZTRnYWt5MXgzN2ZuZGs4bGl4czBjYTlmeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o9LbqjcDkDf9oPGJVg/giphy.gif",
              200,
              300,
              "ur sus",
            );
          } else {
          }

          // update des trackers
          combo += 1;
          console.log("combo =" + combo);
          pairFound += 1;
          if (playerATurn == true) {
            playerAScore += 1;
            document.querySelector("#playerAScore").innerHTML =
              `${playerAScore}`;
          } else {
            playerBScore += 1;
            document.querySelector("#playerBScore").innerHTML =
              `${playerBScore}`;
          }

          gsap.from(".scoreboard", {
            scale: 1.2,
            rotate: 5,
            duration: 1,
            ease: "bounce",
          });

          // retire les cartes du jeu
          setTimeout(() => {
            firstCard.classList.add("disabled");
            firstCard.classList.remove("firstCard");

            secondCard.classList.add("disabled");
            secondCard.classList.remove("secondCard");

            firstChoice = null;
            secondChoice = null;
          }, 500);

          // Si toutes les cartes sont retournées
          if (pairFound == cardDeckSize / 2) {
            backgroundMusic.volume = 0.05;
            audioNice.volume = 0.05;
            audioNice1.volume = 0.05;
            audioNice2.volume = 0.05;
            audioNice3.volume = 0.05;
            audioNice4.volume = 0.05;
            audioNice5.volume = 0.05;
            audioSUS.volume = 0.05;
            audioVictory.play();
            console.log("game over !");
            dialog.show();
            if (playerAScore > playerBScore) {
              console.log("Player A wins");
              winner.innerText = `Player A wins!`;
            } else if (playerBScore > playerAScore) {
              winner.innerText = `Player B wins !`;
              console.log("Player B wins");
            }
            document.querySelector("button").addEventListener("onclick", () => {
              scored.play();
            });
          }
        }

        // Pair pas trouvée
        else {
          // funny audio if it was after a combo
          if (combo >= 2) {
            console.log("erhm acutally");
            audioFail.play();
          } else {
          }

          combo = 0;

          console.log("oops wrong !");
          console.log("combo =" + combo);

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
            document.querySelector("#playerTurn").classList.toggle("playerB");
            document.querySelector("body").classList.toggle("playerB");

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
        audioError.play();
      }
    });
  });
}
