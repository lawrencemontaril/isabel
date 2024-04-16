"use client";
import { useState, useEffect, useRef } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import ProgressBarUI from "../ui/ProgressBarUI";

export default function Volume({ audioRef }) {
  const [volume, setVolume] = useState(60);
  const [isMuted, setIsMuted] = useState(false);
  const volumeRef = useRef();

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  useEffect(() => {
    audioRef.current.muted = isMuted;
  }, [isMuted, audioRef]);

  function handleMute() {
    setIsMuted(!isMuted);
  }

  function handleVolumeChange() {
    setIsMuted(false);
    setVolume(volumeRef.current.value);
  }

  return (
    <div className="flex w-64 items-center justify-center gap-2">
      <button onClick={handleMute}>
        {isMuted ? (
          <SpeakerXMarkIcon className="w-[16px]" />
        ) : (
          <SpeakerWaveIcon className="w-[16px]" />
        )}
      </button>
      <div className="group relative flex w-full flex-1 items-center">
        <ProgressBarUI
          progressBarRef={volumeRef}
          value={isMuted ? 0 : volume}
          max={100}
          handleChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}
