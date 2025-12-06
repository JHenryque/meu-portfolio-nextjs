import "./stylles.css";
//import { JsonPostRepository } from "@/repositories/json.post.repository";
import CardHabilidade from "../CardHabilidade";

export default function Habilidade() {
  //const habil = new JsonPostRepository().findAllHabilidades();

  // const containerRef = useRef<HTMLDivElement>(null);
  // const speed = 0.5; // Velocidade do movimento

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   let x = 0;

  //   const move = () => {
  //     "use client";
  //     x += speed;
  //     container.style.transform = `translateX(${x}px)`;

  //     // Quando passar a largura total, reseta para manter o loop perfeito
  //     if (x >= container.scrollWidth / 2) {
  //       x = 0;
  //     }

  //     requestAnimationFrame(move);
  //   };

  //   move();
  // }, []);

  return (
    <section className="habilidades" id="habilidades">
      {/* <ArrowBigDownDash className="seta-baixo" /> */}
      <h2>Habilidades</h2>
      <CardHabilidade />
    </section>
  );
}
