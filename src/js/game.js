// import Character from "./domain";

class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
  log() {
    console.log('saving data')
  }
}

export function readGameSaving() {
  console.log('load')
}

export function writeGameSaving() {
  console.log('save')
}

export default Game
