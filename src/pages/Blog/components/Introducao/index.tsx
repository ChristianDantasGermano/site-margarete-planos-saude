import Perfil01 from "../../../../assets/photos/ma_perfil04.png";
export default function Introducao() {
  return (
    <div className="flex gap-6 max-w-full">
      <div className="flex flex-col">
        <h1 className="font-belleza text-6xl uppercase text-base-base pt-16">
          MARGARETE PLANOS DE SAÚDE
        </h1>
        <h4 className="font-belleza text-3xl text-base-base pl-4 w-11/12 text-justify">
          Especialista em consultoria e corretagem de planos de saúde
          individuais, familiares, por adesão e para micro, pequenas e médias
          empresas.
        </h4>
      </div>
      <div className="">
        <img className="object-contain rounded-3xl" src={Perfil01} />
      </div>
    </div>
  );
}
