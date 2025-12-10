import { JsonPostRepository } from "@/repositories/json.post.repository";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export default async function CardHabilidade({ ...props }: PropType) {
  const habil = new JsonPostRepository().findAllHabilidades();

  //await new Promise((resolve) => setTimeout(resolve, 1000));

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <ul id="habil" {...props} ref={emblaRef}>
      {habil.then((data) =>
        data.map((habilidade) => (
          <li key={habilidade.slug}>
            <Link href={`/habilidade/${habilidade.slug}`}>
              {habilidade.nome}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}
