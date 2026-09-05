import { useEffect, useState } from "react";

const usps = [
  "Free shipping over KSh 3,000",
  "Made in small batches",
  "30-day scalp guarantee",
];

const StatusBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % usps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-status-bar text-status-bar-foreground py-2">
      <div className="container mx-auto px-4 text-center">
        <p
          key={currentIndex}
          className="text-[0.7rem] font-light tracking-[0.2em] uppercase animate-fade-in"
        >
          {usps[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default StatusBar;
