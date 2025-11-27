import Banner from "@/components/Banner";
import Contato from "@/components/Contato";
import Habilidade from "@/components/Habilidade";
import Projetos from "@/components/Projetos";
import SobreMi from "@/components/SobreMi";

export default function LayoutApp() {
  return (
    <>
      <Banner />
      <SobreMi />
      <Habilidade />
      <Projetos />
      <Contato />
    </>
  );
}
