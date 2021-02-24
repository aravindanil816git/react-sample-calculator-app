export default function NumericalKeyPad(props) {
  const pushOrConcatDigit = (digit) => {
    if (
      props.getSymbolStackLength() === 1 &&
      props.getNumberStackLength() === 1
    ) {
      props.pushToNumberStack(digit);
      props.postKeyPadResult(digit);
      return;
    }

    if (props.getNumberStackLength() === 0) {
      props.pushToNumberStack(digit);
      props.postKeyPadResult(digit);
    } else {
      let topDigit = props.popNumberStack();
      props.pushToNumberStack(topDigit + digit);
      props.postKeyPadResult(topDigit + digit);
    }
  };

  const pushSymbol = (symbol) => {
    if (props.getSymbolStackLength() === 1 && props.getNumberStackLength > 1) {
      props.computeResult(symbol);
      props.pushToSymbolStack(symbol);
    }
    if (props.getSymbolStackLength() === 0)
        props.pushToSymbolStack(symbol);
  };

  return (
    <div className="keypad">
      <button onClick={() => pushOrConcatDigit("1")}>1</button>
      <button onClick={() => pushOrConcatDigit("2")}>2</button>
      <button onClick={() => pushOrConcatDigit("3")}>3</button>
      <button onClick={() => pushOrConcatDigit("4")}>4</button>
      <button onClick={() => pushOrConcatDigit("5")}>5</button>
      <button onClick={() => pushOrConcatDigit("6")}>6</button>
      <button onClick={() => pushOrConcatDigit("7")}>7</button>
      <button onClick={() => pushOrConcatDigit("8")}>8</button>
      <button onClick={() => pushOrConcatDigit("9")}>9</button>
      <button onClick={() => pushOrConcatDigit("0")}>0</button>
      <button onClick={() => props.clearStack()}>Clear</button>
      <button onClick={() => props.computeResult()}>=</button>
      <button onClick={() => pushSymbol("+")}>+</button>
      <button onClick={() => pushSymbol("-")}>-</button>
      <button onClick={() => pushSymbol("*")}>x</button>
      <button onClick={() => pushSymbol("/")}>/</button>
    </div>
  );
}
