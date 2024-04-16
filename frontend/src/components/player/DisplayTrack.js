import Image from "next/image";

export default function DisplayTrack({
  currentTrack,
  audioRef,
  duration,
  setDuration,
  progressBarRef,
  handleChangeTrack,
  currentTrackIndex,
  setTimeProgress,
  repeat,
}) {
  function handleLoadedMetadata() {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  }

  // function handleEnded() {
  //   if (repeat) {
  //     setTimeProgress(0);
  //     audioRef.current.play();
  //   } else {
  //     handleChangeTrack(currentTrackIndex + 1);
  //   }
  // }

  navigator.mediaSession.metadata = new MediaMetadata({
    title: currentTrack.title,
    artist: currentTrack.artist.name,
    album: currentTrack.album.title,
    artwork: [
      {
        src: currentTrack.album.cover,
        sizes: "96x96",
        type: "image/jpg",
      },
    ],
  });

  return (
    <div className="flex">
      <Image
        height={56}
        width={56}
        className="h-[56px] w-[56px] rounded-md"
        src={currentTrack.album.cover}
        alt={`${currentTrack.album.title}`}
      />
      <div className="flex flex-col justify-center p-2 px-4">
        <div className=" max-w-[24ch] overflow-hidden text-ellipsis text-nowrap text-sm text-zinc-50">
          {currentTrack.title}
        </div>
        <div className="text-xs text-zinc-400">{currentTrack.artist.name}</div>
        <audio
          src={currentTrack.audio}
          ref={audioRef}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => handleChangeTrack(currentTrackIndex + 1)}
          loop={repeat}
        ></audio>
      </div>
    </div>
  );
}
