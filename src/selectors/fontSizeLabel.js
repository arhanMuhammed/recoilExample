import { selector } from "recoil";
import fontSizeState from "../atoms/fontSize";

const FontSizeLabelState = selector({
  key: "FontSizeLabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";
    return `${fontSize}${unit}`;
  },
});

export default FontSizeLabelState;
