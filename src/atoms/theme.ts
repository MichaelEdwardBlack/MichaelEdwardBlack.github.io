import { atom } from "recoil";
import { Theme } from "../constants";

export const themeState = atom({
  key: "themeState",
  default: Theme.Light,
});
