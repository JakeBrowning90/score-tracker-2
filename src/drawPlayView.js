import { clearView } from "./clearView";
import { drawSetupView } from "./drawSetupView";
import { increaseScoreButton } from "./increaseScoreButton";
import { decreaseScoreButton } from "./decreaseScoreButton";
import { playerList, clearList } from "./playerList";

const drawPlayView = () => {
  const main = document.querySelector("main");
  const playDiv = document.createElement("div");
  playDiv.setAttribute("id", "playDiv");
  main.appendChild(playDiv);

  playerList.forEach((player) => {
    playDiv.appendChild(drawPlayerCard(player));
  });

  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearList();
    clearView();
    drawSetupView();
  });
};

const drawPlayerCard = (player) => {
  let playerCard = document.createElement("section");
  playerCard.setAttribute("class", "playerCard");
  playerCard.setAttribute("style", `background-color: ${player.color}`);

  let score = 0;

  let nameHeading = document.createElement("h2");
  nameHeading.textContent = player.name;
  nameHeading.setAttribute("class", "nameDisplay");

  let playerScoreDisplay = document.createElement("input");
  playerScoreDisplay.setAttribute("class", "scoreDisplay");
  playerScoreDisplay.setAttribute("type", "number");
  playerScoreDisplay.setAttribute("value", score);

  playerCard.appendChild(decreaseScoreButton(-1));
  playerCard.appendChild(decreaseScoreButton(-5));
  playerCard.appendChild(decreaseScoreButton(-10));
  playerCard.appendChild(nameHeading);
  playerCard.appendChild(playerScoreDisplay);
  playerCard.appendChild(increaseScoreButton(1));
  playerCard.appendChild(increaseScoreButton(5));
  playerCard.appendChild(increaseScoreButton(10));

  const decreaseButtons = playerCard.querySelectorAll(".cardButtonMinus");
  decreaseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (score > -999) {
        playerScoreDisplay.valueAsNumber =
          playerScoreDisplay.valueAsNumber + Number(button.value);
      }
    });
  });

  const increaseButtons = playerCard.querySelectorAll(".cardButtonPlus");
  increaseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (score < 999) {
        playerScoreDisplay.valueAsNumber =
          playerScoreDisplay.valueAsNumber + Number(button.value);
      }
    });
  });

  return playerCard;
};

export { drawPlayView };
