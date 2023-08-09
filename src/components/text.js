import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import fontSizeState from "../atoms/fontSize";
import FontSizeLabelState from "../selectors/fontSizeLabel";

function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(FontSizeLabelState);
  return (
    <div>
      <p style={{ fontSize }}>hizli yazan coder seyrek save eder</p>
      <p> current font size ..: {fontSizeLabel} </p>
    </div>
  );
}

export default Text;
