export default function ProgressBarUI({
  progressBarRef,
  value,
  max,
  handleChange,
  handleMouseUp,
}) {
  return (
    <>
      <progress
        className="absolute h-[4px] w-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gray-500 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-gray-100 group-hover:[&::-webkit-progress-value]:bg-sky-500"
        value={value}
        max={max}
      ></progress>
      <input
        type="range"
        className="[&::-webkit-slider-runnable-track]:transparent z-10  w-full cursor-pointer appearance-none bg-transparent focus:outline-none disabled:pointer-events-none
            disabled:opacity-50
            [&::-moz-range-thumb]:h-2.5
            [&::-moz-range-thumb]:w-2.5
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:border-4
            [&::-moz-range-thumb]:border-blue-600
            [&::-moz-range-thumb]:bg-zinc-50
            [&::-moz-range-thumb]:transition-all
            [&::-moz-range-thumb]:duration-150
            [&::-moz-range-thumb]:ease-in-out
            
            [&::-moz-range-track]:h-2
            [&::-moz-range-track]:w-full
            [&::-moz-range-track]:rounded-full
            
            [&::-moz-range-track]:bg-zinc-50
            [&::-webkit-progress-value]:bg-red-500
            [&::-webkit-slider-runnable-track]:h-1
            [&::-webkit-slider-runnable-track]:w-full
            [&::-webkit-slider-runnable-track]:rounded-full
            [&::-webkit-slider-runnable-track]:dark:bg-gray-700
            
            [&::-webkit-slider-thumb]:-mt-1
            [&::-webkit-slider-thumb]:hidden
            
            [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:w-3
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-zinc-50
            [&::-webkit-slider-thumb]:transition-all
            
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:ease-in-out
            group-hover:[&::-webkit-slider-thumb]:block
            [&::-webkit-slider-thumb]:dark:bg-zinc-700"
        ref={progressBarRef}
        value={value}
        max={max}
        onChange={handleChange}
        onMouseUp={handleMouseUp}
      />
    </>
  );
}
