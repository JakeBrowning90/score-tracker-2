const checkAllPlayerNames = () => {
  const players = document.querySelectorAll("input.playerInput");
  let errCount = 0;
  players.forEach((player) => {
    if (player.value == "") {
      errCount++;
    }
  });
  if (errCount == 0) {
    return true;
  } else {
    return false;
  }
};

export { checkAllPlayerNames };
