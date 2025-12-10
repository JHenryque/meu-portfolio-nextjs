import Link from "next/link";
import "./stylles.css";
import { JsonPostRepository } from "@/repositories/json.post.repository";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export default function Projetos({ ...props }: PropType) {
  const projetos = new JsonPostRepository().findAllProjetos();

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="projetos-container" ref={emblaRef}>
      <h1 id="projetos">Projetos</h1>

      {projetos.then((data) =>
        data.map((projeto) => (
          <div className="card-projeto" key={projeto.slug}>
            <Link href={`/projetos/${projeto.slug}`}>
              {projeto.titulo}
              <p>{projeto.descricao}</p>
              <Image src={projeto.imagem} alt={projeto.titulo} />
            </Link>
          </div>
        ))
      )}
      {/* <li>
            <Link href="/projetos/projeto-de-lista"> Projeto de Lista </Link>
          </li>

          <Link href="/projetos/pojeto-de-agenmdamento">
            <li>Pojeto de Agenmdamento</li>
          </Link>
          <Link href="/projetos/projeto-de-calcular-imc">
            <li>Projeto de Calcular Imc</li>
          </Link> */}
    </div>
  );
}
