import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1000,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentIndex < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && currentIndex === text.length) {
      // Finished typing, wait before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && currentIndex === 0) {
      // Finished deleting, wait before starting to type again
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingEffect; 