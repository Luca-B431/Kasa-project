import type { Route } from "./+types/home";
import Banner from "../components/banner";
import Gallery from "~/components/home/gallery";

export default function Home({}: Route.ComponentProps) {
  return (
    <div className="flex-col justify-center items-center h-full bg-white">
      <Banner
        url={"assets/banner_homepage.png"}
        text={"Chez vous, partout et ailleurs"}
      />
      <div className="flex flex-col py-8 gap-12 h-full">
        <Gallery />
      </div>
    </div>
  );
}
