"use client";

import "./stylles.css";
//import { JsonPostRepository } from "@/repositories/json.post.repository";
import CardHabilidade from "../CardHabilidade";

export default function Habilidade() {
  //const habil = new JsonPostRepository().findAllHabilidades();

  return (
    <section className="habilidades" id="habilidades">
      {/* <ArrowBigDownDash className="seta-baixo" /> */}
      <h2>Habilidades</h2>

      <CardHabilidade />
    </section>
  );
}
