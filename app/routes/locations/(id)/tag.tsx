export default function Tag({ key, tag }: { key: string; tag: string }) {
  return (
    <>
      <span
        key={key}
        className="flex justify-center items-center text-white bg-[#FF6060] text-[10px] md:text-xl text-nowrap overflow-hidden text-ellipsis rounded-[5px] lg:rounded-xl py-2 h-5 md:h-7 px-4"
      >
        {tag}
      </span>
    </>
  );
}
