import HomeCard from "~/components/home/homecard";
import data from "~/assets/data.json";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 rounded-xl gap-8 lg:gap-4 xl:gap-8 my-8 m-4 md:mx-24 overflow-scroll h-[800px] lg:bg-[#F6F6F6] lg:p-14">
      {data.map((item) => (
        <HomeCard key={item.id} picture={item.pictures[0]} title={item.title} />
      ))}
    </div>
  );
}
