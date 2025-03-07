import { top200 } from "../data/words";

const Test = () => {
  return (
    <div>
      <div className="text-light max-w-[1286px] flex flex-wrap max-h-[168px] overflow-clip">
        {top200.map((word) => (
          <div className="text-[32px] py-1 px-2 ">
            {word.split("").map((letter) => (
              <span>{letter}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
