import Image from "next/image";
import foto from "../../../public/img/minha-foto.jpg";
import "./stylles.css";

export default function SobreMi() {
  return (
    <section
      className="meus-dados"
      data-aos="zoom-in-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      id="sobre"
    >
      <div className="banner">
        <div>
          <div className="minha-foto">
            <Image
              className="minha-foto"
              src={foto}
              width={400}
              height={400}
              alt="Minha Foto"
            />
          </div>
        </div>
        <div className="dados-pessoais">
          <h1>Jose Henrique Ferreira</h1>
          <p className="titulo">Engenharia de Software</p>
          <ul className="sobre_min">
            <li className="li-pessoal">
              <p className="text-pessoal">
                Sou um desenvolvedor apaixonado por tecnologias. Estou Cursando
                Engenharia de Software na Faculdade{" "}
                <b className="unicesumar">UniCesumar</b>, Tenho Cursos online na{" "}
                <b className="alura">Alura</b>, <b className="udemy">Udemy</b>,{" "}
                <b className="dankicode">Danki Code</b>, e outros , nas áreas de
                desenvolvimento front-end e back-end. Não tenho experiencia
                profissional, mas sou uma pessoa motivado e dedicado.
              </p>
            </li>

            <li className="li-pessoal">
              <p className="text-pessoal">
                Tenho Curso de Tecnico de Manutenção de Computadores e Nootbook.
                Trabalhei na Secretaria de Educaçao periodo de quatro anos. Sou
                uma pessoa motivador, dedicado e Correto, gosto de trabalhar em
                equipe.
              </p>
            </li>

            <li className="li-pessoal">
              <p className="text-pessoal">
                Minha abordagem é focada em entregar código limpo, funcional e
                escalável, sempre priorizando a usabilidade e a eficiência.
                Estou constantemente me atualizando com as melhores práticas do
                mercado e novas ferramentas para oferecer resultados de alta
                qualidade. Acredito que a tecnologia pode transformar ideias em
                realidade digital.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </section>
  );
}
