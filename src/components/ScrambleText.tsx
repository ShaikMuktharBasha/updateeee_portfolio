import React, { useState, useRef } from 'react';

const ASCII_CHARS = '!<>-_\\/[]{}—=+*^?#01X$%@';

interface ScrambleTextProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  triggerOnHover = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isScrambling = useRef(false);

  const scramble = () => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    let iteration = 0;
    const maxIterations = text.length * 3;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) {
              return text[index];
            }
            return ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
          })
          .join('')
      );

      iteration += 1;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        isScrambling.current = false;
      }
    }, 28);
  };

  return (
    <span
      onMouseEnter={triggerOnHover ? scramble : undefined}
      className={`inline-block select-none cursor-default ${className}`}
    >
      {displayText}
    </span>
  );
};

