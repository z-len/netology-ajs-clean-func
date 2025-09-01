// TODO: write your code here
import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from "./game";
console.log('worked');

const game = new Game();
game.start();

const gameSavingData = new GameSavingData();
gameSavingData.log();

loadGame();

saveGame();

