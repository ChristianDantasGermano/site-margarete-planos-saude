import Slider from "./components/Carroceu";
import PlanoSaudeOptions from "./components/PlanosDeSaude";
import SeguradoraOptions from "./components/Seguradoras";
import Apresentacao from "./components/Apresentacao";
import Caracteristicas from "./components/Caracteristicas";
import Imagem from "./components/Imagem";
import Carroceu from "./components/Carroceu_2";

function Home() {
  return (
    <div className="z-0 bg-base-base flex-grow ">
      <Carroceu />
      <Apresentacao />
      <Caracteristicas />
      <Imagem />
      <PlanoSaudeOptions />
      <SeguradoraOptions />
      <div id="modal-portal"></div>
    </div>
  );
}

export default Home;
