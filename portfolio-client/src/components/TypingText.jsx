import { useEffect, useState } from "react";

function TypingText({ text, speed = 100, delay = 1500 }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayText.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500); // small pause before typing again
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, speed, delay]);

  return (
    <span>
      {displayText} <span className="animate-pulse">|</span>{" "}
    </span>
  );
}

export default TypingText;
