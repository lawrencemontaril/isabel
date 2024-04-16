import { useState, useEffect, useCallback } from "react";
import ProgressBarUI from "../ui/ProgressBarUI";

const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return "0:00";
};

export default function ProgressBar({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
  isPlaying,
}) {
  const [time, setTime] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    if (!sliding) {
      setTime(timeProgress);
    }
  }, [isPlaying, timeProgress]);

  const handleProgressChange = () => {
    setSliding(true);
    setTime(progressBarRef.current.value);
  };

  function handleMouseUp() {
    setSliding(false);
    audioRef.current.currentTime = time;
  }

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <span className="w-10 flex-none text-end text-xs text-zinc-400">
        {formatTime(time)}
      </span>
      <div className="group relative flex w-full flex-1 items-center">
        <ProgressBarUI
          value={Math.floor(time)}
          max={Math.floor(duration)}
          progressBarRef={progressBarRef}
          handleChange={handleProgressChange}
          handleMouseUp={handleMouseUp}
        />
      </div>
      <span className="w-10 flex-none text-start text-xs text-zinc-400">
        {formatTime(duration)}
      </span>
    </div>
  );
}
