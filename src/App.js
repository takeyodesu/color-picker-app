import { HuePicker, SketchPicker } from "react-color";
import { useEffect, useState } from "react";
import SwitchImage from "./components/SwitchImage";

function App() {
  //背景色
  const [bgColor, setBgColor] = useState("#EFEFEF");
  const changeBgColor = (color) => {
    setBgColor(color.hex);
  };
  //左色
  const [leftColor, setLeftColor] = useState("#034DD7");
  const changeLeftColor = (color) => {
    setLeftColor(color.hex);
  };
  //右色
  const [rightColor, setRightColor] = useState("#EE1331");
  const changeRightColor = (color) => {
    setRightColor(color.hex);
  };
  //背景色の明るさによって見出し文字色を白/黒変更
  const [textColor, setTextColor] = useState("#000");
  useEffect(() => {
    const brightness =
      parseInt(bgColor.substring(1, 3), 16) * 0.299 +
      parseInt(bgColor.substring(3, 5), 16) * 0.587 +
      parseInt(bgColor.substring(5, 7), 16) * 0.114;
    const color = brightness >= 180 ? "#000000" : "#ffffff";
    setTextColor(color);
  }, [bgColor]);

  return (
    <div className="App">
      <div style={{ background: bgColor }}>
        <div class="head" style={{ color: textColor }}>
          Hello color-picker desu!!!!!
        </div>

        <div class="switchImageWrapper">
          <div class="leftPickerWrapper">
            <HuePicker color={leftColor} onChange={changeLeftColor} />
          </div>
          <SwitchImage leftColor={leftColor} rightColor={rightColor} />
          <div class="rightPickerWrapper">
            <HuePicker color={rightColor} onChange={changeRightColor} />
          </div>
        </div>

        <div class="BgPickerWrapper">
          <SketchPicker color={bgColor} onChange={changeBgColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
