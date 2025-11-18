import { PostHabilidadesDto } from "@/models/postHabilidadesDto";
import { PostProjetosDto } from "@/models/postProjetosDto";

export interface PostRepository {
  findAllHabilidades(): Promise<PostHabilidadesDto[]>;
  findHabilidadeBySlug(slug: string): Promise<PostHabilidadesDto>;
  findAllProjetos(): Promise<PostProjetosDto[]>;
  findProjetoBySlug(slug: string): Promise<PostProjetosDto>;
}
