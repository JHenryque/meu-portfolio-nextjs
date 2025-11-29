import Image from "next/image";
import foto from "../../../public/img/minha-foto.jpg";

export default function SobreMi() {
  return (
    <section
      className="meus-dados"
      data-aos="zoom-in-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      id="sobre"
    >
      <div className="title_page" id="sobre">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Sobre <i className="fa-solid fa-message-code"></i>
        </h2>
      </div>
      <div className="banner">
        <div>
          <div className="minha-foto">
            <Image src={foto} width={200} height={200} alt="Minha Foto" />
          </div>
        </div>
        <div id="#sobre" className="dados-pessoais">
          <h1 className="nome_my">Jose Henrique Ferreira</h1>
          <p className="titulo">Engenharia de Software</p>
          <ul className="sobre_min">
            <li className="li-pessoal">
              <p className="text-pessoal">
                Sou um desenvolvedor apaixonado por tecnologias modernas. Estou
                Cursando Engenharia de Software na Faculdade UniCesumar, Tenho
                Cursos online na Alura, Udemy, Danki Code, e outros , nas áreas
                de desenvolvimento front-end e back-end. Não tenho experiencia
                profissional, mas sou uma pessoa motivado e dedicado.
              </p>
            </li>

            <li className="li-pessoal">
              <p className="text-pessoal">
                Minha abordagem é focada em entregar código limpo, funcional e
                escalável, sempre priorizando a usabilidade e a eficiência.
                Estou constantemente me atualizando com as melhores práticas do
                mercado e novas ferramentas para oferecer resultados de alta
                qualidade.
              </p>
            </li>

            <li className="li-pessoal">
              <p className="text-pessoal">
                Tenho Curso de Tecnico de Manutenção de Computadores e Nootbook.
                Trabalhei na Secretaria de Educaçao periodo de quatro anos. Sou
                uma pessoa motivador, dedicado e Correto, gosto de trabalhar em
                equipe. Acredito que a tecnologia pode transformar ideias em
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
