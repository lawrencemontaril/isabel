export default function AudioPlayerSkeleton() {
  return (
    <div className="flex h-full animate-pulse items-stretch justify-between gap-2 p-2">
      <div className="flex-1">
        <div className="flex">
          <div className="h-[56px] w-[56px] rounded-md bg-zinc-800"></div>
          <div className="flex flex-col justify-center gap-1 p-2 px-4">
            <div className="h-[0.875rem] w-24 max-w-[12rem] rounded-md bg-zinc-800 text-sm"></div>
            <div className="h-3 w-16 rounded-md bg-zinc-800"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-between gap-1">
        <div className="w-32 flex-1 rounded-md bg-zinc-800 p-4"></div>
        <div className="w-full flex-1 rounded-md bg-zinc-800 p-1"></div>
      </div>

      <div className="flex flex-1 items-center justify-end">
        <div className="h-2 w-64 rounded-md bg-zinc-800"></div>
      </div>
    </div>
  );
}
