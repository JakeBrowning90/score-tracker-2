const addPlayerForm = () => {
  const setupForm = document.getElementById("setupForm");
  // Cap at 8
  if (setupForm.childElementCount < 8) {
    setupForm.appendChild(drawPlayerForm());
  }
};

const drawPlayerForm = () => {
  const setupForm = document.getElementById("setupForm");
  let playerNumber = setupForm.childElementCount + 1;
  const playerDiv = document.createElement("div");
  playerDiv.setAttribute("class", "playerDiv");

  const playerLabel = document.createElement("label");
  playerLabel.textContent = `Player ${playerNumber} name: `;

  const playerInput = document.createElement("input");
  playerInput.setAttribute("name", "playerInput");
  playerInput.setAttribute("class", "playerInput");
  playerInput.setAttribute("maxlength", "10");

  const colorLabel = document.createElement("label");
  colorLabel.textContent = `Player color: `;

  const colorInput = document.createElement("input");
  colorInput.setAttribute("type", "color");
  colorInput.setAttribute("class", "colorInput");
  colorInput.setAttribute(
    "value",
    `${defaultColors[setupForm.childElementCount]}`,
  );

  playerDiv.appendChild(playerLabel);
  playerLabel.appendChild(playerInput);
  playerDiv.appendChild(colorLabel);
  colorLabel.appendChild(colorInput);

  return playerDiv;
};

const removePlayerForm = () => {
  const setupForm = document.getElementById("setupForm");
  // Floor is 1
  if (setupForm.childElementCount > 1) {
    setupForm.lastElementChild.remove();
  }
};

const defaultColors = [
  "#e6194B",
  "#f58231",
  "#ffe119",
  "#3cb44b",
  "#42d4f4",
  "#4363d8",
  "#911eb4",
  "#f032e6",
];

export { addPlayerForm, removePlayerForm, defaultColors };
