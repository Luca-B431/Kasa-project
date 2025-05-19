import { Link } from "react-router";

export default function HomeCard({
  picture,
  title,
  id,
}: {
  picture: string;
  title: string;
  id: string;
}) {
  return (
    <>
      <Link to={`/details/${id}`}>
        <div
          className="relative flex flex-col justify-end h-86 lg:h-64 xl:h-86 bg-cover rounded-xl"
          style={{ backgroundImage: `url(${picture})` }}
        >
          <h1 className="text-white text-[18px] m-2">{title}</h1>
        </div>
      </Link>
    </>
  );
}
