import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

type Theme = "dark" | "light";

export const themeState = atom<Theme>({
  key: "themeState",
  default: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  effects_UNSTABLE: [persistAtom],
});
