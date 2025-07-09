import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");
  const [overwrite, setOverwrite] = useState(true);

  const handleClick = (value) => {
    if (overwrite || input === "0") {
      setInput(value);
      setOverwrite(false);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setInput("0");
    setOverwrite(true);
  };

  const handleEquals = () => {
    try {
      const evalResult = eval(input);
      setInput(evalResult.toString());
      setOverwrite(true);
    } catch {
      setInput("Error");
      setOverwrite(true);
    }
  };

  const handleOperator = (operator) => {
    const lastChar = input[input.length - 1];
    if (/[+\-*/]/.test(lastChar)) {
      setInput((prev) => prev.slice(0, -1) + operator);
    } else {
      setInput((prev) => prev + operator);
    }
    setOverwrite(false);
  };

  return (
        <div className="text-xl">
          <div className="min-h-screen flex items-center justify-center bg-gray-500 py-10 px-10 lg:px-0 w-screen">
            <div className="bg-gray-200 rounded-2xl shadow-2xl px-6 lg:py-10 py-5 w-90">
              <div className="text-right text-white text-4xl mb-4 px-4 py-8 bg-gray-900 rounded-xl font-mono break-words min-h-[3rem]">
                {input}
              </div>
              <div className="grid grid-cols-4 gap-3">
                <button
                  className="col-span-2 text-white bg-gray-700 p- rounded-xl"
                  onClick={handleClear}
                >
                  AC
                </button>
                <button
                  className="bg-gray-700 text-white p-4 rounded-xl"
                  onClick={() => handleClick(".")}
                >
                  .
                </button>
                <button
                  className="bg-orange-400 lg:text-3xl text-gray-900 p-4 rounded-xl"
                  onClick={() => handleOperator("/")}
                >
                  ÷
                </button>
                {["7", "8", "9"].map((n) => (
                  <button
                    key={n}
                    className="bg-gray-900 text-white p-4 rounded-xl"
                    onClick={() => handleClick(n)}
                  >
                    {n}
                  </button>
                ))}
                <button
                  className="bg-orange-400 text-gray-900 lg:text-3xl p-4 rounded-xl"
                  onClick={() => handleOperator("*")}
                >
                  ×
                </button>
                {["4", "5", "6"].map((n) => (
                  <button
                    key={n}
                    className="bg-gray-900 text-white  p-4 rounded-xl"
                    onClick={() => handleClick(n)}
                  >
                    {n}
                  </button>
                ))}
                <button
                  className="bg-orange-400 text-gray-900 p-4 lg:text-3xl rounded-xl"
                  onClick={() => handleOperator("-")}
                >
                  −
                </button>
                {["1", "2", "3"].map((n) => (
                  <button
                    key={n}
                    className="bg-gray-900 text-white p-4 rounded-xl"
                    onClick={() => handleClick(n)}
                  >
                    {n}
                  </button>
                ))}
                <button
                  className="bg-orange-400 text-gray-900 lg:text-3xl p-4 rounded-xl"
                  onClick={() => handleOperator("+")}
                >
                  +
                </button>
                <button
                  className="col-span-2 bg-gray-900 p-4 rounded-xl text-white "
                  onClick={() => handleClick("0")}
                >
                  0
                </button>
                <button
                  className="bg-orange-400 col-span-2 text-gray-900 lg:text-3xl p-4 rounded-xl"
                  onClick={handleEquals}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;
