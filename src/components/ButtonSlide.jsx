export default function ButtonSlide({ text }) {
  return (
    <div className="w-full">
      <button
        className=" w-64 
      border
      border-neutral-400
      px-1
      bg-gray-800
      text-white
      hover:shadow-white
      hover:text-neutral-600
      hover:shadow-[inset_20rem_0_0_0]
      duration-[400ms,700ms]
      transition-[color,box-shadow]
                "
      >
        <p>{text}</p>
      </button>
    </div>
  );
}
