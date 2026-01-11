import { addPlayerForm, removePlayerForm } from "./playerFormController";
import { checkAllPlayerNames } from "./checkAllPlayerNames";
import { populatePlayerList } from "./populatePlayerList";
import { clearView } from "./clearView";
import { drawPlayView } from "./drawPlayView";

const drawSetupView = () => {
  const main = document.querySelector("main");
  const setupForm = document.createElement("form");
  setupForm.setAttribute("id", "setupForm");

  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("id", "buttonDiv");

  const instructionSpan = document.createElement("span");
  instructionSpan.setAttribute("id", "instructionSpan");
  instructionSpan.textContent = "Choose player count and names";

  const addPlayerButton = document.createElement("button");
  addPlayerButton.setAttribute("id", "addPlayerButton");
  addPlayerButton.textContent = "Add Player";
  addPlayerButton.addEventListener("click", (event) => {
    event.preventDefault();
    addPlayerForm();
  });

  const removePlayerButton = document.createElement("button");
  removePlayerButton.setAttribute("id", "removePlayerButton");
  removePlayerButton.textContent = "Remove Player";
  removePlayerButton.addEventListener("click", (event) => {
    event.preventDefault();
    removePlayerForm();
  });

  const startButton = document.createElement("button");
  startButton.setAttribute("id", "startButton");
  startButton.textContent = "Start Game";
  startButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (checkAllPlayerNames()) {
      // Render Play view
      populatePlayerList();
      clearView();
      drawPlayView();
    } else {
      // Display error message
      instructionSpan.textContent = "Enter all names or remove non-players";
      instructionSpan.setAttribute("class", "errorMessage");
    }
  });

  main.appendChild(setupForm);
  main.appendChild(buttonDiv);

  buttonDiv.appendChild(instructionSpan);
  buttonDiv.appendChild(addPlayerButton);
  buttonDiv.appendChild(removePlayerButton);
  buttonDiv.appendChild(startButton);
  addPlayerForm();
};

export { drawSetupView };
