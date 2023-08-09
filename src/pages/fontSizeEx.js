import React from "react";
import { useRecoilState } from "recoil";
import fontSizeState from "../atoms/fontSize";
import Text from "../components/text";

function FontSizeEx() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <div>
      <Text />
      <button
        onClick={(e) => {
          setFontSize(fontSize + 1);
        }}
      >
        Font Size +
      </button>
      <button
        onClick={(e) => {
          setFontSize(12);
        }}
      >
        Font Size Reset
      </button>
    </div>
  );
}

export default FontSizeEx;
