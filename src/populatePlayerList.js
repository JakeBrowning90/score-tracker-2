import { playerList } from "./playerList";

const populatePlayerList = () => {
  const players = document.querySelectorAll("input.playerInput");
  const colors = document.querySelectorAll("input.colorInput");
  players.forEach((player, index) => {
    playerList.push({ name: player.value, color: colors[index].value });
  });
};

export { populatePlayerList };
