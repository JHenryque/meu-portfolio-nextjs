export default function Header() {
  return (
    <header className="cabecalho">
      <div>
        <a className="logon-marca" href="#">
          <h1>Meu Portfólio</h1>
        </a>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
      {/* <!-- Hamburguer --> */}
      <div className="hamburguer active_bars" id="menu-hamburguer">
        <i className="fa-solid fa-bars"></i>
      </div>
      {/* <!-- Fechar --> */}
      <div className="menu-close" id="menu-close">
        <i className="fa-solid fa-xmark"></i>
      </div>
      {/* <!-- Menu Mobile --> */}
      <nav className="menu-mobile">
        <ul>
          <a href="#sobre">
            <li>Sobre</li>
          </a>
          <a href="#habilidades">
            <li>Habilidades</li>
          </a>
          <a href="#projetos">
            <li>Projetos</li>
          </a>
          <a href="#contato">
            <li>Contato</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
