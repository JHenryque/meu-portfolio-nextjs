import { Metadata } from "next";

interface HabilidadeProps {
  params: Promise<{ slug: string }>;
}

export const metadata: Metadata = {
  title: "Detalhes da habilidade",
};

export default async function Habilidade({ params }: HabilidadeProps) {
  const { slug } = await params;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <h1>Detalhes da habilidade {slug}</h1>
    </div>
  );
}
