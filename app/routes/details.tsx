import { useParams } from "react-router";
import Gallery from "~/components/details/gallery";
import data from "~/assets/data.json";

export function loader() {
  return { name: "Kasa Details" };
}

export default function Details() {
  const { id } = useParams();

  const thisData = data.find((item) => item.id === id);

  if (!thisData) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex flex-col h-full bg-white w-full max-w-screen-xl mx-auto">
      <Gallery pictures={thisData.pictures} />
    </div>
  );
}
