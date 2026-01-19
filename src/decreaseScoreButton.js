const decreaseScoreButton = (x) => {
  let decreaseScoreButton = document.createElement("button");
  decreaseScoreButton.setAttribute("class", "cardButtonMinus");
  decreaseScoreButton.setAttribute("value", x);
  decreaseScoreButton.textContent = `${x}`;

  return decreaseScoreButton;
};

export { decreaseScoreButton };
