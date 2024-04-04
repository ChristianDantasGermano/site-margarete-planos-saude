import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";
export default function Introducao() {
  return (
    <div className="flex flex-col md:flex-row pt-2 w-full">
      <div className="flex flex-col flex-grow-0">
        <h1 className="font-glacialIndifference font-bold text-2xl md:text-3xl text-gray-700 md:pt-4 bg-base">
          Margarete planos de saúde
        </h1>
        <h4 className="font-sans text-base md:text-lg text-gray-700 mt-2 pl-2 md:pl-4 text-justify">
          Especialista em consultoria e corretagem de planos de saúde
          individuais, familiares, por adesão e para micro, pequenas e médias
          empresas.
        </h4>
        <h4 className="font-sans text-base md:text-lg text-gray-700 mt-2 pl-2 md:pl-4 text-justify">
          No mundo complexo dos planos de saúde, é comum sentir-se perdido e
          confuso ao navegar pelas diversas opções disponíveis. É nesse momento
          que os corretores de planos de saúde entram em cena. Nossa empresa se
          orgulha de oferecer uma equipe especializada de corretores dedicados a
          ajudar você a encontrar o plano de saúde perfeito. Neste texto, vamos
          explorar os benefícios e serviços que nossos corretores podem
          oferecer, proporcionando uma experiência tranquila e personalizada
          para você e sua família.
        </h4>
      </div>
      <div className="overflow-auto w-full h-full flex flex-grow justify-center items-center">
        <AsyncImage
          className="object-top md:max-h-[680px] max-h-[360px] max-w-xs md:max-w-xl h-screen w-full rounded drop-shadow-lg"
          src="../Blog/photos/ma_perfil04.png"
          Transition={(props) => <Blur radius={10} {...props} />}
          loader={<div className="bg-base-tertiary" />}
        />
      </div>
    </div>
  );
}
