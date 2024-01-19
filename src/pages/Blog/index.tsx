import Perfil01 from "../../assets/photos/ma_perfil04.png";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";

function Blog() {
  return (
    <div className="z-0 bg-base-tertiary flex-grow p-12 px-48">
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-6 max-w-full">
          <div className="flex flex-col">
            <h1 className="font-belleza text-6xl uppercase text-base-base pt-16">
              MARGARETE PLANOS DE SAÚDE
            </h1>
            <h4 className="font-belleza text-3xl text-base-base pl-4 w-11/12 text-justify">
              Especialista em consultoria e corretagem de planos de saúde
              individuais, familiares, por adesão e para micro, pequenas e
              médias empresas.
            </h4>
          </div>
          <div className="">
            <img className="object-contain rounded-3xl" src={Perfil01} />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-full mt-16 ">
          <h1 className="font-belleza text-6xl uppercase text-base-primary">
            POR QUE A ESCOLHER MARGARETE PLANOS DE SAÚDE?
          </h1>
          <div className="flex flex-col">
            <div className="flex m-2 p-4 bg-base-primary rounded-3xl">
              <PiPersonArmsSpreadFill size={150} />
              <div className="flex flex-col">
                <h4 className="font-belleza text-4xl font-semibold">
                  Atendimento humano
                </h4>
                <p className="font-belleza text-3xl mt-1">
                  Seja por telefone, WhatsApp, redes sociais ou em visitas
                  presenciais nossos estarei preparada para te dar o melhor
                  atendimento.
                </p>
              </div>
            </div>
            <div className="flex m-2 p-4 bg-base-primary rounded-3xl">
              <IoTime size={150} />
              <div className="flex flex-col">
                <h4 className="font-belleza text-4xl font-semibold">
                  Agilidade
                </h4>
                <p className="font-belleza text-3xl mt-1">
                  Solicite sua cotação do plano de saúde ou odontológico da sua
                  escolha: fácil, rápido, transparente e sem compromisso.
                </p>
              </div>
            </div>
            <div className="flex m-2 p-4 bg-base-primary rounded-3xl">
              <HiMiniUserGroup size={150} />
              <div className="flex flex-col">
                <h4 className="font-belleza text-4xl font-semibold">
                  Profissionalismo
                </h4>
                <p className="font-belleza text-3xl mt-1">
                  Consultora e profissional com conhecimento sólido do mercado
                  de benefícios e planos de saúde.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-full mt-16 ">
          <h1 className="font-belleza text-6xl uppercase text-base-primary">
            Como escolher o tipo de plano certo?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Blog;
