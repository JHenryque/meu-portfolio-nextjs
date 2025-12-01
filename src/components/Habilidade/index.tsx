import Link from "next/link";
import "./stylles.css";
import { JsonPostRepository } from "@/repositories/json.post.repository";

export default function Habilidade() {
  const habil = new JsonPostRepository().findAllHabilidades();

  return (
    <section className="habilidades">
      <div className="title_page" id="habilidades">
        <h2 data-aos="fade-down" data-aos-duration="1000">
          Habilidades <i className="fa-solid fa-code"></i>
        </h2>
      </div>
      <ul>
        {habil.then((data) =>
          data.map((habilidade) => (
            <li key={habilidade.slug}>
              <Link href={`/habilidade/${habilidade.slug}`}>
                {habilidade.nome}
              </Link>
            </li>
          ))
        )}
        {/* <li
          className="fullstack"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Link href="/habilidade/html-css-javascript">
            HTML | Css3 | JavaScript
          </Link>
        </li>
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-offset="300"
        >
          <Link href="/habilidade/php">PHP</Link>
        </li>
        <li
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          React.js | React.ts
        </li>
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-offset="300"
        >
          Banco de Dados (MySQL)
        </li>
        <li
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          Versionamento (Git)
        </li>
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-offset="200"
        >
          Linguangem C
        </li> */}
      </ul>
    </section>
  );
}
