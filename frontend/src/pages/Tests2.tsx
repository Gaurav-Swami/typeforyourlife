import React, { useState, useEffect, useRef } from "react";

const Tests2 = () => {
  const word = "monkeytype";
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorStyle, setCursorStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    letterRefs.current = letterRefs.current.slice(0, word.length);
  }, [word]);

  useEffect(() => {
    if (letterRefs.current[activeIndex] && containerRef.current) {
      const letterRect =
        letterRefs.current[activeIndex]!.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setCursorStyle({
        left: letterRect.left - containerRect.left + "px",
        top: letterRect.top - containerRect.top + "px",
        height: letterRect.height + "px",
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % word.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [word.length]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <div className="text-[32px]">
        {word.split("").map((letter, index) => (
          <span
            key={index}
            ref={(el) => {
              letterRefs.current[index] = el;
            }}
            className="inline-block"
          >
            {letter}
          </span>
        ))}
      </div>
      <span
        style={cursorStyle}
        className="absolute bg-white transition-all duration-300 animate-blink"
      />
    </div>
  );
};

export default Tests2;
