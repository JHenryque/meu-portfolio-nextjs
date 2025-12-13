"use client";

import "./stylles.css";
//import { JsonPostRepository } from "@/repositories/json.post.repository";
import CardHabilidade from "../CardHabilidade";
import post from "../../db/seed/posts.json";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  align: "start",
  dragFree: true,
  loop: true,
};
const SLIDE_COUNT = post.post.habilidades.length;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys()).map(
  (i) => post.post.habilidades[i]
);

console.log(SLIDES);

export default function Habilidade() {
  //const habil = new JsonPostRepository().findAllHabilidades();

  return (
    <section className="habilidades" id="habilidades">
      {/* <ArrowBigDownDash className="seta-baixo" /> */}
      <h2>Habilidades</h2>

      <CardHabilidade slides={SLIDES} options={OPTIONS} />
    </section>
  );
}
