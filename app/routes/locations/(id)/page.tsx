import type { Route } from "./+types/page";
import Gallery from "./gallery";
import Collapse from "~/components/collapse";
import Tag from "./tag";
import Rating from "./rating";
import Profile from "./profile";
import data from "~/assets/data.json";

// le loader est prioritaire et donc bloquant
export async function loader({ params }: { params: { id: string } }) {
  // j'ai l'item `id` dans les paramètres, je vais chercher l'élément correspondant dans les données
  const location = data.find((item) => item.id === params.id);

  // si l'élément n'est pas trouvé, je renvoie une erreur 404
  if (!location) {
    throw new Response("Not Found", { status: 404 });
  }

  return location;
}

export default function Details({ params }: Route.ComponentProps) {
  const { id } = params;

  const thisData = data.find((item) => item.id === id);
  const thisTags = thisData?.tags || [];

  if (!thisData) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex flex-col h-full bg-white w-full max-w-screen-xl mx-auto mb-32 min-h-[100vh]">
      {/* Caroussel */}
      <Gallery pictures={thisData.pictures} />

      {/* Descriptif */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-8 h-full mx-4 md:mx-24 mb-2">
        <div className="flex flex-col gap-4 lg:gap-4 lg:w-3/5">
          {/* Text description */}
          <h1 className="text-[#FF6060] text-xl lg:text-4xl w-full">
            {thisData.title}
          </h1>
          <p className="text-[14px] lg:text-xl">{thisData.location}</p>

          {/* Container Tags */}
          <div className="flex gap-2 w-full h-auto">
            {thisTags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>

        {/* Container Rating & Profile */}
        <div className="flex lg:flex-col-reverse wrap-normal justify-between items-center lg:items-end lg:w-2/5">
          <Rating rating={thisData.rating} />
          <Profile name={thisData.host.name} picture={thisData.host.picture} />
        </div>
      </div>

      {/* Container Collapse */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-8 px-4 md:px-24 pt-6">
        <div className="w-full lg:w-1/2">
          <Collapse title={"Description"} text={thisData.description} />
        </div>
        <div className="w-full lg:w-1/2">
          <Collapse title={"Équipements"} text={thisData.equipments} />
        </div>
      </div>
    </div>
  );
}
