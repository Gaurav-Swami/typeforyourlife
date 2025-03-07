import { useEffect, useState } from "react";
import { top200 } from "../data/words";

const Test = () => {
  const [focusIndex, setFocusIndex] = useState(0);
  const elements = document.getElementsByClassName("letters");
  const hiddenInput = document.getElementById("hiddenInput");
  const focusInput = () => hiddenInput?.focus();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.value === "a") {
      elements[focusIndex].classList.add("text-foreground");
      setFocusIndex((prevValue) => prevValue + 1);
    }

    e.target.value = "";
  };

  useEffect(() => {
    hiddenInput?.focus();
  }, []);

  return (
    <div>
      <span className="text-foreground">{focusIndex}</span>
      <div
        className="text-light max-w-[1286px] flex flex-wrap max-h-[168px] overflow-clip border border-light mt-40 cursor-pointer"
        onClick={focusInput}
      >
        {top200.map((word) => (
          <div className="text-[32px] py-1 px-2 ">
            {word.split("").map((letter) => (
              <span className="letters">{letter}</span>
            ))}
          </div>
        ))}
        <input
          type="text"
          className="opacity-0 absolute "
          onChange={(e) => handleInput(e)}
          id="hiddenInput"
        />
      </div>
    </div>
  );
};

export default Test;
