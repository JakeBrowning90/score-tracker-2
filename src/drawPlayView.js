import { clearView } from "./clearView";
import { drawSetupView } from "./drawSetupView";
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

  // let playerScoreDisplay = document.createElement("h2");
  // playerScoreDisplay.setAttribute("class", "scoreDisplay");
  // playerScoreDisplay.textContent = 0;

  let playerScoreDisplay = document.createElement("input");
  playerScoreDisplay.setAttribute("class", "scoreDisplay");
  playerScoreDisplay.setAttribute("type", "number");
  playerScoreDisplay.setAttribute("value", score);

  let increaseScoreButton = document.createElement("button");
  increaseScoreButton.setAttribute("class", "cardButton");
  increaseScoreButton.textContent = "+1";

  let decreaseScoreButton = document.createElement("button");
  decreaseScoreButton.setAttribute("class", "cardButton");
  decreaseScoreButton.textContent = "-1";

  increaseScoreButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (score < 999) {
      increaseScore();
    }
  });
  decreaseScoreButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (score > -999) {
      decreaseScore();
    }
  });

  const increaseScore = () => {
    playerScoreDisplay.valueAsNumber++;
  };
  const decreaseScore = () => {
    playerScoreDisplay.valueAsNumber--;
  };

  playerCard.appendChild(decreaseScoreButton);
  playerCard.appendChild(nameHeading);
  playerCard.appendChild(playerScoreDisplay);
  playerCard.appendChild(increaseScoreButton);

  return playerCard;
};

export { drawPlayView };
