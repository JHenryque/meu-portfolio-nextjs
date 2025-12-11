//import { JsonPostRepository } from "@/repositories/json.post.repository";
import Link from "next/link";
import post from "../../db/seed/posts.json";

export default function CardHabilidade({ ...props }) {
  //const habil = new JsonPostRepository().findAllHabilidades();

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  // init Swiper:

  return (
    <ul id="habil" {...props}>
      {post.post.habilidades.map((data) => (
        <li key={data.slug} className="card-habilidade">
          <Link href={`/data/${data.slug}`}>{data.nome}</Link>
        </li>
      ))}
    </ul>
  );
}
