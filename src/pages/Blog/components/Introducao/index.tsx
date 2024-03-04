import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";
export default function Introducao() {
  return (
    <div className="flex gap-6 max-w-full">
      <div className="flex flex-col">
        <h1 className="font-belleza text-5xl uppercase text-base-base pt-16">
          MARGARETE PLANOS DE SAÚDE
        </h1>
        <h4 className="font-belleza text-3xl text-base-base pl-4 w-11/12 text-justify">
          Especialista em consultoria e corretagem de planos de saúde
          individuais, familiares, por adesão e para micro, pequenas e médias
          empresas.
        </h4>
      </div>
      <AsyncImage
        className="object-contain m-8 max-h-[840px] h-screen w-full rounded drop-shadow-lg"
        src="../Blog/photos/ma_perfil04.png"
        Transition={(props) => <Blur radius={10} {...props} />}
        loader={<div className="bg-base-tertiary" />}
      />
    </div>
  );
}
