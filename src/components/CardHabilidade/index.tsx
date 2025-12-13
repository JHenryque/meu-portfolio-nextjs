//import { JsonPostRepository } from "@/repositories/json.post.repository";

import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: { nome: string; slug: string }[];
  options?: EmblaOptionsType;
};

export default function CardHabilidade({
  slides,
  options,
  ...props
}: PropType) {
  //const habil = new JsonPostRepository().findAllHabilidades();

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  // init Swiper:

  //const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  console.log(emblaRef);

  return (
    <ul id="habil" {...props} ref={emblaRef}>
      {slides.map((data) => (
        <li key={data.slug} className="card-habilidade">
          {data.nome}
        </li>
      ))}
    </ul>
  );
}
