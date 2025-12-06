import { JsonPostRepository } from "@/repositories/json.post.repository";
import Link from "next/link";

export default async function CardHabilidade({ ...props }) {
  const habil = new JsonPostRepository().findAllHabilidades();

  return (
    <ul {...props}>
      {habil.then((data) =>
        data.map((habilidade) => (
          <li key={habilidade.slug}>
            <Link href={`/habilidade/${habilidade.slug}`}>
              {habilidade.nome}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}
