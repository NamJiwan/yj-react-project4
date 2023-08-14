export default function ButtonSlide({ text, pHeight }) {
  return (
    <div >
      <button
        type="submit"
        className={`
        ${pHeight && 'py-4'}
        w-full
      border
      border-neutral-400
      px-3
      bg-gray-800
      text-white
      hover:shadow-white
      hover:text-neutral-600
      hover:shadow-[inset_30rem_0_0_0]
      duration-[400ms,700ms]
      transition-[color,box-shadow]
      `}
      >
        <p>{text}</p>
      </button>
    </div>
  );
}
