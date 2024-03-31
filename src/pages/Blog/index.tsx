import BeneficioPlanos from "./components/BeneficioPlanos";
import Introducao from "./components/Introducao";
import TipoPlanos from "./components/TipoPlano";

function Blog() {
  return (
    <div className="z-0 bg-base-tertiary flex justify-center items-center p-4 lg:px-44 ">
      <div className="flex flex-col lg:w-9/12">
        <Introducao />
        <BeneficioPlanos />
        <TipoPlanos />
      </div>
    </div>
  );
}

export default Blog;
