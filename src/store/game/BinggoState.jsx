import { atom } from "recoil";

export const PanValid = atom({
  key: "PanValid",
  default: false
});

export const GamePan = atom({
  key: "GamePan",
  default: []
});

export const GamePanComputer = atom({
  key: "GamePanComputer",
  default: []
});

export const InputGamePan = atom({
  key: "InputGamePan",
  default: {}
});
