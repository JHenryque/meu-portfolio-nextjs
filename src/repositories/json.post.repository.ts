import { resolve } from "path";
import { PostRepository } from "./post-repository";
import { PostHabilidadesDto } from "@/models/postHabilidadesDto";
import { readFile } from "fs/promises";
import { PostProjetosDto } from "@/models/postProjetosDto";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

export class JsonPostRepository implements PostRepository {
  private async responsePosts() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllHabilidades(): Promise<PostHabilidadesDto[]> {
    const posts = await this.responsePosts();

    return posts.habilidades;
  }

  async findHabilidadeBySlug(slug: string): Promise<PostHabilidadesDto> {
    const posts = await this.responsePosts();
    const post = posts.habilidades.find(
      (post: PostHabilidadesDto) => post.slug === slug
    );

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }

  async findAllProjetos(): Promise<PostProjetosDto[]> {
    const posts = await this.responsePosts();

    return posts.projetos;
  }

  async findProjetoBySlug(slug: string): Promise<PostProjetosDto> {
    const posts = await this.responsePosts();
    const post = posts.projetos.find(
      (post: PostProjetosDto) => post.slug === slug
    );

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }
}
