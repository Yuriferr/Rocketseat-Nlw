import "./styles/main.css";
import LogoImg from "./assets/Logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdsBanner } from "./components/CreateAdsBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6,
      spacing: 15,
    },
  });

  useEffect(() => {
    axios.get("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  });

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={LogoImg} />

      <h1 className="text-6xl text-white font-black mt-20 mb-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text ">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div ref={ref} className="keen-slider">
        {games.map((game, indice) => {
          return (
            <div key={game.id} className={`keen-slider__slide number-slide${indice}`}>
              <GameBanner
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            </div>
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdsBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
