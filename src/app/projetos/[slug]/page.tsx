import { Metadata } from "next";

interface ProjetoPagesProps {
  params: Promise<{ slug: string }>;
}

export const metadata: Metadata = {
  title: "Varios Projetos Elaborado",
};

export default async function ProjetoPages({ params }: ProjetoPagesProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Varios Projetos Elaborado {slug}</h1>
    </div>
  );
}
