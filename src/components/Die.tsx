import { DieType } from "../pages/greedy/types/Die";

export const Die = ({die, pending}: {die: DieType, pending: boolean}) => {
  let color = "bg-primary-500";
  if (pending) {
    color = "bg-secondary-500";
  }
  if (!die.canRoll) {
    color = "bg-gray-500";
  }
  return (
    <div className={`flex items-center justify-center w-8 h-8 rounded ${color}`}>
      {die.value}
    </div>
  );
}