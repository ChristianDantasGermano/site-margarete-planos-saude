import BeneficioPlanos from "./components/BeneficioPlanos";
import Introducao from "./components/Introducao";
import TipoPlanos from "./components/TipoPlano";

function Blog() {
  return (
    <div className="z-0 bg-base-tertiary flex justify-center items-center p-4 QHD:px-56 2xl:px-44 lg:px-32 md:px-12 ">
      <div className="flex flex-col QHDPLUS:w-5/12 QHD:w-7/12 2xl:w-9/12 md:w-full">
        <Introducao />
        <BeneficioPlanos />
        <TipoPlanos />
      </div>
    </div>
  );
}

export default Blog;
