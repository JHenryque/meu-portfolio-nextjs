import Link from "next/link";
import "./stylles.css";
import { JsonPostRepository } from "@/repositories/json.post.repository";

export default function Projetos() {
  const projetos = new JsonPostRepository().findAllProjetos();
  return (
    <div className="projetos-container">
      <h1 id="projetos">Projetos</h1>

      {projetos.then((data) =>
        data.map((projeto) => (
          <div className="card-projeto" key={projeto.slug}>
            <Link href={`/projetos/${projeto.slug}`}>
              {projeto.titulo}
              <p>{projeto.descricao}</p>
              <img src={projeto.imagem} alt={projeto.titulo} />
            </Link>
          </div>
        ))
      )}
      {/* <li>
            <Link href="/projetos/projeto-de-lista"> Projeto de Lista </Link>
          </li>

          <Link href="/projetos/pojeto-de-agenmdamento">
            <li>Pojeto de Agenmdamento</li>
          </Link>
          <Link href="/projetos/projeto-de-calcular-imc">
            <li>Projeto de Calcular Imc</li>
          </Link> */}
    </div>
  );
}
