import BeneficioPlanos from "./components/BeneficioPlanos";
import Introducao from "./components/Introducao";
import TipoPlanos from "./components/TipoPlano";

function Blog() {
  return (
    <div className="z-0 bg-base-tertiary flex-grow p-12 px-48">
      <div className="flex flex-col ">
        <Introducao />
        <BeneficioPlanos />
        <TipoPlanos />
      </div>
    </div>
  );
}

export default Blog;
