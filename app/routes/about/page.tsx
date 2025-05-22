import type { Route } from "./+types/page";
import Banner from "../../components/banner";
import Collapse from "../../components/collapse";

export function loader() {
  return { name: "Kasa About" };
}

export default function About() {
  const texts = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];

  return (
    <div className="flex flex-col h-full bg-white max-w-screen-xl mx-auto sm:mt-24 min-h-[100vh]">
      <Banner url={"/assets/banner_aboutpage.png"} text={""} />
      <div className="flex flex-col flex-grow pt-12 pb-32  px-4 md:px-24 gap-12">
        <Collapse title={"Fiabilité"} text={texts[0]} />
        <Collapse title={"Respect"} text={texts[1]} />
        <Collapse title={"Service"} text={texts[2]} />
        <Collapse title={"Sécurité"} text={texts[3]} />
      </div>
    </div>
  );
}
