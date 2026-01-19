const increaseScoreButton = (x) => {
  let increaseScoreButton = document.createElement("button");
  increaseScoreButton.setAttribute("class", "cardButtonPlus");
  increaseScoreButton.setAttribute("value", x);
  increaseScoreButton.textContent = `+${x}`;

  return increaseScoreButton;
};

export { increaseScoreButton };
