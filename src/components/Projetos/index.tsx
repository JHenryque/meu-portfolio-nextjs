import Link from "next/link";

export default function Projetos() {
  return (
    <div>
      <h1>Projetos</h1>

      <div>
        <ul>
          <li>
            <Link href="/projetos/projeto-de-lista"> Projeto de Lista </Link>
          </li>

          <Link href="/projetos/pojeto-de-agenmdamento">
            <li>Pojeto de Agenmdamento</li>
          </Link>
          <Link href="/projetos/projeto-de-calcular-imc">
            <li>Projeto de Calcular Imc</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
