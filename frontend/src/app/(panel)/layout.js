"use client";
import AudioPlayer from "@/components/player/AudioPlayer";
import LeftSidebar from "@/components/LeftSidebar";
import SimpleBarReact from "simplebar-react";

import "simplebar-core/dist/simplebar.css";
import "@/app/simplebar.css";

export default function Layout({ children }) {
  return (
    <div className="grid-panel h-dvh max-h-dvh min-h-[480px] min-w-[800px] gap-2 p-2">
      <aside className="left-sidebar w-[4.5rem] rounded-lg bg-zinc-900">
        <LeftSidebar />
      </aside>
      <main className="main overflow-hidden rounded-lg bg-zinc-900">
        <SimpleBarReact autoHide={false} className="max-h-full p-2 pe-3">
          {children}
        </SimpleBarReact>
      </main>
      <aside className="right-sidebar rounded-lg bg-zinc-900">Lyrics</aside>
      <div className="audio-player col-span-3 h-[4.5rem]">
        <AudioPlayer />
      </div>
    </div>
  );
}
