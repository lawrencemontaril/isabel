"use client";
import { useState, useEffect, useRef } from "react";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import Volume from "./Volume";
import AudioPlayerSkeleton from "../skeleton/AudioPlayerSkeleton";

export default function AudioPlayer() {
  const [tracks, setTracks] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tracks/")
      .then((res) => res.json())
      .then((data) => {
        setTracks(data);
        setCurrentTrack(data[0]);
      });
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [repeat, setRepeat] = useState(false);

  const audioRef = useRef();
  const progressBarRef = useRef();

  function handleChangeTrack(nextTrackIndex) {
    if (nextTrackIndex > tracks.length - 1) {
      nextTrackIndex = 0;
      setIsPlaying(false);
    }

    if (nextTrackIndex < 0) {
      nextTrackIndex = tracks.length - 1;
    }

    setCurrentTrackIndex(nextTrackIndex);
    setCurrentTrack(tracks[nextTrackIndex]);
  }

  if (!tracks && !currentTrack) {
    return <AudioPlayerSkeleton />;
  }

  if (currentTrack && isPlaying) {
    document.title = `${currentTrack.title} - ${currentTrack.artist.name} | Project_Isabel`;
  } else {
    document.title = "Project_Isabel";
  }

  return (
    <div className="flex h-full items-center justify-between gap-2 p-2">
      <div className="flex-1">
        <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
          setDuration={setDuration}
          progressBarRef={progressBarRef}
          handleChangeTrack={handleChangeTrack}
          currentTrackIndex={currentTrackIndex}
          setTimeProgress={setTimeProgress}
          repeat={repeat}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-1">
        <Controls
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          progressBarRef={progressBarRef}
          duration={duration}
          setTimeProgress={setTimeProgress}
          currentTrack={currentTrack}
          handleChangeTrack={handleChangeTrack}
          currentTrackIndex={currentTrackIndex}
        />

        <ProgressBar
          progressBarRef={progressBarRef}
          audioRef={audioRef}
          timeProgress={timeProgress}
          duration={duration}
          isPlaying={isPlaying}
        />
      </div>

      <div className="flex flex-1 items-center justify-end">
        <Volume audioRef={audioRef} />
      </div>
    </div>
  );
}
