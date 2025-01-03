import { useRecoilState, useRecoilValue } from "recoil";
import { activePlayerIndexState, pendingScoreState, playerState } from "../../atoms/greedy";
import { MinusIcon, PlusCircleIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { EditableText } from "../../components/Inputs/EditableText";

export const PlayerList = () => {
  const [ players, setPlayers ] = useRecoilState(playerState);
  const [ activePlayerIndex, setActivePlayerIndex ] = useRecoilState(activePlayerIndexState);
  const pendingScore = useRecoilValue(pendingScoreState);

  const getPlayerColors = (playerIndex: number) => {
    if (activePlayerIndex === playerIndex) {
      return "border-secondary-500 bg-secondary-500"
    }
    else {
      return "border-primary-500 bg-primary-500"
    }
  }

  const addPlayer = (index: number) => {
    setPlayers([...players.slice(0, index + 1), {name: `Player ${index + 2}`, score: 0}, ...players.slice(index + 1)])
  }

  const removePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index))
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-8 auto-rows-min md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      {players.map((player, index) => 
        <div key={index} className="relative flex flex-col pt-1 group">
          <div className="absolute justify-end hidden gap-1 -top-4 right-1 group-hover:flex">
            <PlusCircleIcon className="cursor-pointer size-4 fill-secondary-200 hover:fill-secondary-300" onClick={() => addPlayer(index)}/>
            <TrashIcon className="cursor-pointer size-4 fill-red-200 hover:fill-red-300" onClick={() => removePlayer(index)} />
          </div>
          <div 
            className={`peer flex flex-col cursor-pointer flex-grow gap-4 p-4 bg-opacity-50 rounded-lg shadow-lg ${getPlayerColors(index)}`}
            onClick={() => setActivePlayerIndex(index)}
          >
            <div className="flex justify-center">
              <EditableText className="text-2xl font-semibold" value={player.name}
                onChange={(e) => {
                  let newPlayers = [...players].map((player, i) => {
                    if (index === i) return { ...player, name: e.target.value };
                    else return player;
                  });

                  setPlayers(newPlayers);
                }}
              />
            </div>
            <div className="flex justify-center text-2xl font-bold text-wrap">
              <EditableText value={player.score} type="number"
                onChange={(e) => {
                  let newPlayers = [...players].map((player, i) => {
                    if (index === i) return {...player, score: parseInt(e.target.value) };
                    else return player;
                  });
                  setPlayers(newPlayers);
                }}
                onBlur={() => {
                  if (isNaN(player.score)) {
                    let newPlayers = [...players].map((player, i) => {
                    if (index === i) return {...player, score: 0 };
                      else return player;
                    });
                    setPlayers(newPlayers);
                  }
                }}
              />
              {index === activePlayerIndex && <span className="ml-2">
                (+ {pendingScore})
              </span>}
            </div>
            
            <div className="flex justify-center gap-1">
              <div 
                className="flex items-center px-2 py-1 bg-red-200 bg-opacity-50 border-red-400 rounded-lg cursor-pointer border-1 hover:bg-red-300"
                onClick={() => {
                  let newPlayers = [...players].map((player, i) => {
                  if (index === i) return {...player, score: player.score - 100 };
                    else return player;
                  });
                  setPlayers(newPlayers);
                }}
              >
                <MinusIcon className="size-4" />
                <span className="text-sm font-semibold">100</span>
              </div>
              <div 
                className="flex items-center px-2 py-1 bg-red-200 bg-opacity-50 border-red-400 rounded-lg cursor-pointer border-1 hover:bg-red-300"
                onClick={() => {
                  let newPlayers = [...players].map((player, i) => {
                  if (index === i) return {...player, score: player.score - 50 };
                    else return player;
                  });
                  setPlayers(newPlayers);
                }}
              >
                <MinusIcon className="size-4" />
                <span className="text-sm font-semibold">50</span>
              </div>
              <div 
                className="flex items-center px-2 py-1 bg-green-200 bg-opacity-50 border-green-400 rounded-lg cursor-pointer border-1 hover:bg-green-300"
                onClick={() => {
                  let newPlayers = [...players].map((player, i) => {
                  if (index === i) return {...player, score: player.score + 50 };
                    else return player;
                  });
                  setPlayers(newPlayers);
                }}
              >
                <PlusIcon className="size-4" />
                <span className="text-sm font-semibold">50</span>
              </div>
              <div 
                className="flex items-center px-2 py-1 bg-green-200 bg-opacity-50 border-green-400 rounded-lg cursor-pointer border-1 hover:bg-green-300"
                onClick={() => {
                  let newPlayers = [...players].map((player, i) => {
                  if (index === i) return {...player, score: player.score + 100 };
                    else return player;
                  });
                  setPlayers(newPlayers);
                }}
              >
                <PlusIcon className="size-4" />
                <span className="text-sm font-semibold">100</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <PlusCircleIcon className="cursor-pointer fill-primary-500 size-8" onClick={() => { setPlayers([...players, { name: `Player ${players.length + 1}`, score: 0 }])}} />
    </div>
  );
}