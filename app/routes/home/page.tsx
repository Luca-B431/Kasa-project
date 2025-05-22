import type { Route } from "./+types/page";
import Banner from "~/components/banner";
import HomeCard from "./homecard";
import data from "~/assets/data.json";

export const loader = () => {
  return { name: "Kasa Home" };
};

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex-col justify-center items-center h-full bg-white  max-w-screen-xl mx-auto min-h-[100vh]">
      <Banner
        url={"assets/banner_homepage.png"}
        text={"Chez vous, partout et ailleurs"}
      />
      <div className="py-8  grid grid-cols-1 lg:grid-cols-3 rounded-xl gap-8 lg:gap-4 xl:gap-8 my-8 max-w-screen-xl overflow-scroll h-[800px] lg:bg-[#F6F6F6] lg:p-14 mx-4 md:mx-24">
        {data.map((item) => (
          <HomeCard
            id={item.id}
            key={item.id}
            picture={item.pictures[0]}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
