export interface DieType {
  id: number;
  value: number;
  canRoll: boolean;
}

export type Dice = DieType[];