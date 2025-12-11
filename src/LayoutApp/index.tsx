import Loading from "@/app/loading";
import Banner from "@/components/Banner";
import Contato from "@/components/Contato";
import Habilidade from "@/components/Habilidade";
import Projetos from "@/components/Projetos";
import SobreMi from "@/components/SobreMi";
import { Suspense } from "react";

export default function LayoutApp() {
  return (
    <>
      <Banner />
      <SobreMi />
      <Habilidade />
      <Suspense fallback={<Loading />}>
        <Projetos />
      </Suspense>
      <Contato />
    </>
  );
}
