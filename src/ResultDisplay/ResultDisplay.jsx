import { useEffect, useState } from "react";

export default function ResultDisplay(props) {
  const [displayResult, setDisplayResult] = useState(0);

  useEffect(() => {
    setDisplayResult((displayResult) => (displayResult = props.result));
  });

  return (
    <>
      <div className="result">{displayResult}</div>
    </>
  );
}
