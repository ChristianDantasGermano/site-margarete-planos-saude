import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";
export default function Introducao() {
  return (
    <div className="flex flex-col lg:flex-row pt-2 w-full">
      <div className="flex flex-col ">
        <h1 className="font-belleza font-bold text-2xl lg:text-3xl text-base-base lg:pt-4">
          Margarete planos de saúde
        </h1>
        <h4 className="font-belleza text-base  lg:text-lg text-base-base mt-2 pl-2 indent-4 lg:pl-4 lg:w-11/12 text-justify">
          Especialista em consultoria e corretagem de planos de saúde
          individuais, familiares, por adesão e para micro, pequenas e médias
          empresas.
        </h4>
      </div>
      <div className=" overflow-auto w-full h-full flex justify-center items-center my-4 lg:my-0">
        <AsyncImage
          className="object-top lg:max-h-[740px] max-h-[360px] max-w-xs lg:max-w-2xl h-screen w-full rounded drop-shadow-lg"
          src="../Blog/photos/ma_perfil04.png"
          Transition={(props) => <Blur radius={10} {...props} />}
          loader={<div className="bg-base-tertiary" />}
        />
      </div>
    </div>
  );
}
