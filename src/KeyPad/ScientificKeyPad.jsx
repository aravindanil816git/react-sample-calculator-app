import { useState } from "react";

export default function ScientificKeyPad(props) {
  const [isScientificModeEnabled, enableScientificMode] = useState(false);

  const toggleScientificMode = () => {
    enableScientificMode((isScientificModeEnabled) => !isScientificModeEnabled);
  };

  const performSignChange = () => {
    let topNumber = props.popNumberStack();
    let result = topNumber * -1;
    props.pushToNumberStack(result);
    props.postKeyPadResult(result);
  };

  const performSquaring = () => {
    let topNumber = props.popNumberStack();
    let result = topNumber * topNumber;
    props.pushToNumberStack(result);
    props.postKeyPadResult(result);
  };

  const performSquareRoot = () => {
    let topNumber = props.popNumberStack();
    let result = Math.round(Math.sqrt(topNumber), 2);
    props.pushToNumberStack(result);
    props.postKeyPadResult(result);
  };

  return (
    <div className="scientific-calculator-options">
      <button
        onClick={toggleScientificMode}
        className={`toggle-sc-btn ${isScientificModeEnabled ? "active" : ""}`}
      >
        Scientific Mode
      </button>
      {isScientificModeEnabled && (
        <>
          <button onClick={() => performSignChange()}>+-X</button>
          <button onClick={() => performSquaring()}>X2</button>
          <button onClick={() => performSquareRoot()}>Root</button>
        </>
      )}
    </div>
  );
}
