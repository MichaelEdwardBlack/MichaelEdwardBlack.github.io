import { atom, selector } from "recoil";
// import { recoilPersist } from "recoil-persist";
import { Player } from "../pages/greedy/types/Player";
import { Dice } from "../pages/greedy/types/Die";

// const { persistAtom } = recoilPersist();

export const pendingScoreState = atom<number>({
  key: "pendingScoreState",
  default: 0,
});

export const playerState = atom<Player[]>({
  key: "playerState",
  default: [{name: "Player 1", score: 0}, {name: "Player 2", score: 0}],
});

export const activePlayerIndexState = atom<number>({
  key: "activePlayerIndexState",
  default: 0,
});

export const diceState = atom<Dice>({
  key: "diceState",
  default: [
    { id: 1, value: 1, canRoll: true }, 
    { id: 2, value: 2, canRoll: true }, 
    { id: 3, value: 3, canRoll: true }, 
    { id: 4, value: 4, canRoll: true }, 
    { id: 5, value: 5, canRoll: true }, 
    { id: 6, value: 6, canRoll: true },
  ],
})

export const pendingDiceState = atom<number[]>({
  key: "pendingDiceState",
  default: [],
});

export const diceCollections = selector({
  key: 'diceCollections',
  get: ({get}) => {
    const dice = get(diceState);
    const rollableDice = dice.filter((die) => die.canRoll);
    /*
    1 = 100 points
    5 = 50 points
    3 of a kind is 100 * die value (except for 1, that is 1,000 points)
    4 of a kind is 200 * die value (except for 1, that is 2,000 points)
    5 of a kind is 300 * die value (except for 1, that is 3,000 points)
    3 pairs is 600 points
    straight is 1,500 points
    */
    let possibleScores = [];
    let numberOfPairs = 0;
    let straightTicker = 0;
    let valueMap: {[key: number]: Dice } = {
      1:[],
      2:[],
      3:[],
      4:[],
      5:[],
      6:[],
    };
    for (const die of rollableDice) {
      valueMap[die.value].push(die);
    }
    for (let dieValue = 1; dieValue <= 6; dieValue++) {
      let length = valueMap[dieValue].length;
      if (length >= 3) {
        possibleScores.push({
          dice: valueMap[dieValue],
          score: 100 * (dieValue === 1 ? dieValue * 10 : dieValue) * (length - 2),
        });
      }
      else if (length === 2) {
        numberOfPairs++;
      }
      else if (length === 1) {
        straightTicker++;
      }
    }

    valueMap[1].forEach((die) => {
      possibleScores.push({
        dice: [die],
        score: 100,
      });
    });

    valueMap[5].forEach((die) => {
      possibleScores.push({
        dice: [die],
        score: 50,
      });
    });

    if (numberOfPairs === 3) {
      possibleScores.push({
        dice: rollableDice,
        score: 600,
      });
    }

    if (straightTicker === 6) {
      possibleScores.push({
        dice: rollableDice,
        score: 1500,
      });
    }

    const notRollableDice = dice.filter((die) => die.canRoll === false);

    return {
      dice,
      rollableDice,
      notRollableDice,
      possibleScores,
    };
  },
});