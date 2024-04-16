import { useState, useEffect, useRef, useCallback } from "react";
import {
  PlayIcon,
  PauseIcon,
  BackwardIcon,
  ForwardIcon,
} from "@heroicons/react/24/solid";

export default function Controls({
  audioRef,
  isPlaying,
  setIsPlaying,
  progressBarRef,
  duration,
  setTimeProgress,
  currentTrack,
  handleChangeTrack,
  currentTrackIndex,
}) {
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    playAnimationRef.current = requestAnimationFrame(repeat);

  }, [isPlaying, audioRef, repeat]);

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("play", handlePlayPause);
    navigator.mediaSession.setActionHandler("pause", handlePlayPause);
    navigator.mediaSession.setActionHandler("previoustrack", () =>
      handleChangeTrack(currentTrackIndex - 1),
    );
    navigator.mediaSession.setActionHandler("nexttrack", () =>
      handleChangeTrack(currentTrackIndex + 1),
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 rounded-md text-white">
      <button className="">
        <BackwardIcon
          className="w-[24px]"
          onClick={() => handleChangeTrack(currentTrackIndex - 1)}
        />
      </button>
      <button onClick={handlePlayPause}>
        {isPlaying ? (
          <PauseIcon className="w-[32px]" />
        ) : (
          <PlayIcon className="w-[32px]" />
        )}
      </button>
      <button>
        <ForwardIcon
          className="w-[24px]"
          onClick={() => handleChangeTrack(currentTrackIndex + 1)}
        />
      </button>
    </div>
  );
}
