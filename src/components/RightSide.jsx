export default function RightSide() {
  return (
    <div className="w-full h-full flex flex-col text-sm text-neutral-500 justify-center items-center space-y-4">
      <p>Scroll</p>
      <div className="w-[1px] h-[120px] bg-neutral-400 mx-auto relative">
        <div className="absolute w-1.5 h-1.5 rounded-full bg-neutral-700 -top-1 -left-[2px] animate-moving-dots" />
      </div>
    </div>
  );
}
