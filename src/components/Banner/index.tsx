import Image from "next/image";
import Container from "../Container";
import imgBane from "../../../public/img/banner_img.jpg";

export default function Banner() {
  return (
    <section className="container-bn">
      <Container>
        <div className="titleContacto">
          <h2 data-aos="fade-right" data-aos-duration="1000">
            Sou Jose Henrique Ferreira
          </h2>

          <p>Engenheiro de Software</p>
          <button
            className="btn-contato"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <a href="#contato">
              Contato <i className="fa-solid fa-phone"></i>
            </a>
          </button>
          <address>
            <ul>
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
                  <i id="linkedin" className="fa-brands fa-linkedin"></i>
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
                  <i id="github" className="fa-brands fa-square-github"></i>
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
                  <i
                    id="instagram"
                    className="fa-brands fa-square-instagram"
                  ></i>
                </a>
              </li>
            </ul>
            <span
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
          <Image src={imgBane} alt="Minha Foto Banner" />
        </div>
      </Container>
    </section>
  );
}
