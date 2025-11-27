export default function Contato() {
  return (
    <>
      <section id="contato" className="contato" data-aos="zoom-in">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Contato
        </h2>
        <form id="form" action="https://formspree.io/f/manqwpqv" method="POST">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu E-mail"
            required
          />
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Digite sua mensagem"
            required
          ></textarea>
          <span className="tdCampo_obr"></span>
          <button
            data-aos="flip-right"
            data-aos-delay="700"
            data-aos-duration="1000"
            id="enviar"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}
