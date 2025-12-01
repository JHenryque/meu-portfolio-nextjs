import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import imageBanner from "../../../public/img/banner.gif";
import "./stylles.css";
import MoveX from "../MoveX";

export default function Banner() {
  return (
    <>
      <section className="container-bn">
        <div className="container-flex">
          <div className="titleContacto">
            <h2 data-aos="fade-right" data-aos-duration="1000">
              Olá, sou Jose Henrique Ferreira
            </h2>

            <p className="move-right">
              Bacharel Engenheiro de Software | Desenvolvedor Web
            </p>
            {/* <p>
              <MoveX />
            </p> */}
            <address>
              <button
                className="btn-contato"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <a href="#contato">Contato</a>
                <Phone className="cel-hove" />
              </button>
              <ul className="redes-sociais">
                <li
                  className="linkedin"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  <a
                    href="https://www.linkedin.com/in/henryque-ferreira-384472259/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li
                  className="github"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  <a
                    href="https://github.com/JHenryque"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                </li>
                <li
                  className="instagram"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="900"
                  data-aos-offset="0"
                >
                  <a
                    href="https://www.instagram.com/henryque_mtb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                </li>
              </ul>

              <span
                className="meu_email"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="900"
                data-aos-offset="0"
              >
                E-mail: josehenriquedevops@gmail.com
              </span>
            </address>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="img-foto"
          >
            {/* <Image src={imgBane} alt="Minha Foto Banner" /> */}
          </div>
          <div className="divisao"></div>
        </div>
        <Image
          className="image_gif"
          src={imageBanner}
          alt="Minha Foto Banner"
        />
      </section>
    </>
  );
}
