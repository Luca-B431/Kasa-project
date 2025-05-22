export default function Profile({
  name,
  picture,
}: {
  name: string;
  picture: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#FF6060] text-xs md:text-xl text-nowrap">
        {name}
      </span>
      <img
        src={picture}
        alt={name}
        className="w-8 md:w-16 h-8 md:h-16 rounded-full"
      />
    </div>
  );
}
