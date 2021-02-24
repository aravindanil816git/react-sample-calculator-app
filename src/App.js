import "./index.css";
import { useState } from "react";
import ResultDisplay from "./ResultDisplay/ResultDisplay";
import KeyPadWrapper from "./KeyPad/KeyPadWrapper";
import ThemeChanger from "./ThemeChanger/ThemeChanger";

export default function App() {
  const [displayResult, setDisplayResult] = useState(0);
  const [isLighttheme, updateTheme] = useState(true);

  const getKeyPadResult = (result) => {
    setDisplayResult(displayResult => displayResult = result);
  }

  const toggleTheme = () => {
    updateTheme(isLighttheme => !isLighttheme);
  }
  return (
    <div className={`App ${isLighttheme ? 'dark' : 'light'}`}>
      <ResultDisplay result={displayResult} />
      <KeyPadWrapper postKeyPadResult={getKeyPadResult} />
      <ThemeChanger isLighttheme={isLighttheme} toggleTheme={toggleTheme} />
    </div>
  );
}
