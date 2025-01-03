
import { activePlayerIndexState, diceCollections, diceState, pendingDiceState, pendingScoreState, playerState } from "../../atoms/greedy";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button } from "../../components/Buttons";
import { DiceIcon } from "../../components/AnimatedIcons/DiceIcon";
import { Die } from "../../components/Die";
import { Dice } from "./types/Die";
import { PlayerList } from "./PlayerList";
import { CheckIcon, StopIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { BrokeModal } from "./BrokeModal";

export const Greedy = () => {
  const [ players, setPlayers ] = useRecoilState(playerState);
  const [ activePlayerIndex, setActivePlayerIndex ] = useRecoilState(activePlayerIndexState);
  const [ pendingScore, setPendingScore ] = useRecoilState(pendingScoreState);
  const [ pendingDiceIds, setPendingDiceIds ] = useRecoilState(pendingDiceState);
  const [ dice, setDice ] = useRecoilState(diceState);
  const { possibleScores, rollableDice, notRollableDice } = useRecoilValue(diceCollections)
  const [ showPossibleScores, setShowPossibleScores ] = useState(false);
  const [ chosenScoreGroups, setChosenScoreGroups ] = useState<number[]>([]);
  const [ canRoll, setCanRoll ] = useState(true);
  const [ isBrokeModalOpen, setIsBrokenModalOpen ] = useState(false);

  useEffect(() => {
    if (!canRoll && rollableDice.length > 0 && possibleScores.length === 0) {
      setTimeout(() => { 
        setIsBrokenModalOpen(true);
      }, 500);
    }
  }, [canRoll, rollableDice, possibleScores]);

  const closeBrokeModal = () => {
    endTurn(true);
    setIsBrokenModalOpen(false);
  }

  const rollDice = () => {
    if (!canRoll) {
      alert("You must choose some dice before rolling again!");
      return;
    }
    let newDice = [...dice].map((die) => {
      if (die.canRoll) {
        return { ...die, value: Math.floor(Math.random() * 6) + 1 };
      }
      else return die;
    });
    setDice(newDice);
    setShowPossibleScores(true);
    setCanRoll(false);
  }

  const addToPendingScore = (score: { dice: Dice, score: number }, index: number) => {
    let isUndo = false;
    let newPendingDiceIds: number[] = [];
    score.dice.forEach((die) => {
      if (pendingDiceIds.includes(die.id)) {
        isUndo = true;
      }
      newPendingDiceIds.push(die.id);
    })
    if (isUndo) {
      setPendingDiceIds([...pendingDiceIds].filter((id) => !newPendingDiceIds.includes(id)));
      setPendingScore(pendingScore - score.score);
      setChosenScoreGroups([...chosenScoreGroups].filter((i) => i !== index));
    }
    else {
      setPendingDiceIds([...pendingDiceIds].concat(newPendingDiceIds));
      setPendingScore(pendingScore + score.score);
      setChosenScoreGroups([...chosenScoreGroups, index]);
    }
  }

  const shouldHideScoreGroup = (score: { dice: Dice, score: number }, index: number) => {
    const isAlreadyChosen = chosenScoreGroups.includes(index);
    const includesChosenDice = score.dice.filter((die) => pendingDiceIds.includes(die.id)).length > 0;
    if (!isAlreadyChosen && includesChosenDice) {
      return true;
    }
    return false;
  };

  const confirmPendingScore = () => {
    let allDiceUsed = true;
    let updatedDice = [...dice].map((die) => {
      if (pendingDiceIds.includes(die.id)) {
        return { ...die, canRoll: false };
      }
      else {
        if (die.canRoll) allDiceUsed = false;
        return die;
      }
    });
    if (allDiceUsed) {
      updatedDice = updatedDice.map((die) => { 
        return {...die, canRoll: true };
      });
    }
    setDice(updatedDice);
    setPendingDiceIds([]);
    setCanRoll(true);
    setShowPossibleScores(false);
  }

  const endTurn = (wasGreedy: boolean) => {
    const updatedPlayers = [...players].map((player, index) => {
      if (index === activePlayerIndex) {
        return {...player, score: player.score + (wasGreedy ? 0 : pendingScore) };
      }
      else return player;
    })
    const updatedDice = [...dice].map((die) => {
      return {...die, canRoll: true };
    });
    setPlayers(updatedPlayers);
    setDice(updatedDice);
    setPendingDiceIds([]);
    setPendingScore(0);
    setActivePlayerIndex((activePlayerIndex + 1) % players.length);
    setShowPossibleScores(false);
    setCanRoll(true);
  }

  

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="pt-2 pb-8 text-4xl font-bold">Greedy</div>
        
        <PlayerList />
        
        <div className="flex gap-4">
          <Button variant="outline" className="flex items-center gap-2 mt-8 mb-4" onClick={() => rollDice()} disabled={!canRoll}>
            <DiceIcon className="size-4"/> Roll Dice
          </Button>
          <Button variant="outline" color="secondary" className="flex items-center gap-2 mt-8 mb-4" onClick={() => confirmPendingScore()} disabled={canRoll}>
            <CheckIcon className="size-4" /> Confirm Score
          </Button>
          <Button variant="outline" color="red" className="flex items-center gap-2 mt-8 mb-4" onClick={() => endTurn(false)}>
            <StopIcon className="size-4" /> End Turn
          </Button>
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <div className="flex flex-wrap justify-center gap-2 my-2">
            {notRollableDice.map((die, index) => 
              <Die key={index} die={die} pending={pendingDiceIds.includes(die.id)} />
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-2 my-2">
            {rollableDice.map((die, index) => 
              <Die key={index} die={die} pending={pendingDiceIds.includes(die.id)} />
            )}
          </div>
        </div>

        <div className={`flex flex-wrap gap-4 mt-4 mb-2 ${showPossibleScores ? "" : "hidden"}`}>
          {possibleScores.map((score, index) => 
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center px-2 py-1 bg-opacity-50 border-2 rounded cursor-pointer border-secondary-500 hover:bg-secondary-200 shadow-lg transition-all duration-300 ${shouldHideScoreGroup(score, index) ? "hidden" : ""}`}
              onClick={() => addToPendingScore(score, index)}
            >
              <div className="flex flex-row flex-wrap gap-1">
                {score.dice.map((die, i) => 
                  <Die key={i} die={die} pending={pendingDiceIds.includes(die.id)} />
                )}
              </div>
              <div>Score: {score.score}</div>
            </div>
          )}
        </div>
      </div>
      
      <BrokeModal isOpen={isBrokeModalOpen} onClose={closeBrokeModal}/>
    </>
  );
};
