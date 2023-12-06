import Slider from "./components/Carroceu";
import PlanoSaudeOptions from "./components/PlanosDeSaude";
import SeguradoraOptions from "./components/Seguradoras";
import Apresentacao from "./components/Apresentacao";
import Caracteristicas from "./components/Caracteristicas";

function Home() {
  return (
    <div className="z-0 bg-base-base h-screen">
      <Slider />
      <Apresentacao />
      <Caracteristicas />
      <PlanoSaudeOptions />
      <SeguradoraOptions />
      <div id="modal-portal"></div>
    </div>
  );
}

export default Home;
