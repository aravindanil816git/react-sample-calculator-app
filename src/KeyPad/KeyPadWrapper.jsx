import { useState } from "react";
import NumericalKeyPad from "./NumericalKeyPad";
import ScientificKeyPad from "./ScientificKeyPad";

export default function KeyPadWrapper(props) {
  const [numberStack] = useState([]);
  const [symbolStack] = useState([]);

  const pushToNumberStack = (number) => {
    numberStack.push(number);
  };

  const pushToSymbolStack = (symbol) => {
    symbolStack.push(symbol);
  };

  const popNumberStack = () => {
    return numberStack.pop();
  };

  const popSymbolStack = () => {
    return symbolStack.pop();
  };

  const getSymbolStackLength = () => {
    return symbolStack.length;
  };

  const getNumberStackLength = () => {
    return numberStack.length;
  };

  const clearStack = () => {
    popSymbolStack();
    popNumberStack();
    popNumberStack();
    pushToNumberStack(0);
    props.postKeyPadResult(0);
  };

  const computeResult = () => {
    let topSymbol = popSymbolStack();
    let result = 0;
    switch (topSymbol) {
      case "+":
        result = numberStack.reduce(
          (a, b) => parseInt(a, 10) + parseInt(b, 10)
        );
        break;
      case "-":
        result = numberStack.reduce(
          (a, b) => parseInt(a, 10) - parseInt(b, 10)
        );
        break;
      case "*":
        result = numberStack.reduce(
          (a, b) => parseInt(a, 10) * parseInt(b, 10)
        );
        break;
      case "/":
        result = numberStack.reduce(
          (a, b) => parseInt(a, 10) / parseInt(b, 10)
        );
        break;
      default:
        console.log("equals")
        return;
    }
    clearStack();
    pushToNumberStack(result);
    props.postKeyPadResult(result);
  };

  return (
    <>
      <NumericalKeyPad
        pushToNumberStack={pushToNumberStack}
        pushToSymbolStack={pushToSymbolStack}
        popNumberStack={popNumberStack}
        popSymbolStack={popSymbolStack}
        computeResult={computeResult}
        getSymbolStackLength={getSymbolStackLength}
        getNumberStackLength={getNumberStackLength}
        clearStack={clearStack}
        postKeyPadResult={props.postKeyPadResult}
      />

      <ScientificKeyPad
        pushToNumberStack={pushToNumberStack}
        popNumberStack={popNumberStack}
        postKeyPadResult={props.postKeyPadResult}
      />
    </>
  );
}
