import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";
export default function Introducao() {
  return (
    <div className="grid grid-cols-0 md:grid-cols-2  w-full">
      <div className="flex grow-0 flex-col">
        <h1 className="font-dancingScript font-bold text-4xl md:text-6xl text-gray-700 md:pt-4 bg-base">
          Margarete planos de saúde
        </h1>
        <p className="font-sans text-sm md:text-base text-gray-700 mt-2 text-justify">
          Especialista em consultoria e corretagem de planos de
          saúdeindividuais, familiares, por adesão e para micro, pequenas e
          médias empresas.
        </p>
        <p className="font-sans text-sm md:text-base text-gray-700 text-justify">
          No mundo complexo dos planos de saúde, é comum sentir-se perdido e
          confuso ao navegar pelas diversas opções disponíveis. É nesse momento
          que os corretores de planos de saúde entram em cena. Nossa empresa se
          orgulha de oferecer uma equipe especializada de corretores dedicados a
          ajudar você a encontrar o plano de saúde perfeito. Neste texto, vamos
          explorar os benefícios e serviços que nossos corretores podem
          oferecer, proporcionando uma experiência tranquila e personalizada
          para você e sua família.
        </p>
      </div>
      <div className="flex justify-center text-center overflow-auto w-full h-full mt-4 md:m-4 items-center p-4">
        <AsyncImage
          className="object-top md:max-h-[460px] 2xl:max-h[560px] max-h-[360px] max-w-md h-screen w-full rounded drop-shadow-lg"
          src="../Blog/photos/ma_perfil04.png"
          Transition={(props) => <Blur radius={10} {...props} />}
          loader={<div className="bg-base-tertiary" />}
        />
      </div>
    </div>
  );
}
