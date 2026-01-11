import { playerList } from "./playerList";

const drawPlayView = () => {
  const main = document.querySelector("main");
  const playDiv = document.createElement("div");
  playDiv.setAttribute("id", "playDiv");
  main.appendChild(playDiv);

  playerList.forEach((player) => {
    playDiv.appendChild(drawPlayerCard(player));
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

  let playerScoreDisplay = document.createElement("h2");
  playerScoreDisplay.setAttribute("class", "scoreDisplay");
  playerScoreDisplay.textContent = 0;

  let increaseScoreButton = document.createElement("button");
  increaseScoreButton.setAttribute("class", "cardButton");
  increaseScoreButton.textContent = "+";

  let decreaseScoreButton = document.createElement("button");
  decreaseScoreButton.setAttribute("class", "cardButton");
  decreaseScoreButton.textContent = "-";

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
    score++;
    playerScoreDisplay.textContent = score;
  };
  const decreaseScore = () => {
    score--;
    playerScoreDisplay.textContent = score;
  };

  playerCard.appendChild(decreaseScoreButton);
  playerCard.appendChild(nameHeading);
  playerCard.appendChild(playerScoreDisplay);
  playerCard.appendChild(increaseScoreButton);

  return playerCard;
};

export { drawPlayView };
