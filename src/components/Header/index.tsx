"use client";

import Link from "next/link";

import "./stylles.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={isFixed ? "cabecalho fixed" : "cabecalho"}>
      <div>
        <Link className="logon-marca" href="/">
          <h1>Dev.JHF</h1>
        </Link>
      </div>

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
          <Link className="logon-marca" href="/">
            <li>Home</li>
          </Link>
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
      <nav className="menu">
        <ul>
          <Link className="logon-marca" href="/">
            <li>Home</li>
          </Link>
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
    </header>
  );
}
