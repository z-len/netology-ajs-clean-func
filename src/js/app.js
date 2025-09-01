// TODO: write your code here
// import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from "./game";
// console.log('worked');

// const game = new Game();
// game.start();

// const gameSavingData = new GameSavingData();
// gameSavingData.log();

// loadGame();

// saveGame();
import { healthUser } from "./user" 
import { sortByHealth as heroSortByHealth } from "./hero";


let user = {
  name: 'Маг', 
  health: 90,
}

let h = healthUser(user)
console.log(h);

const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

let sortedHeroes = heroSortByHealth(heroes)
console.log(sortedHeroes)
