import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IconContext } from "react-icons";

export const beneficiosPlanos = [
  {
    icon: <PiPersonArmsSpreadFill />,
    titulo: "Atendimento humano",
    descricao:
      "Seja por telefone, WhatsApp, redes sociais ou em visitas presenciais nossos estarei preparada para te dar o melhor atendimento.",
  },
  {
    icon: <IoTime />,
    titulo: "Agilidade",
    descricao:
      "Solicite sua cotação do plano de saúde ou odontológico da sua escolha: fácil, rápido, transparente e sem compromisso.",
  },
  {
    icon: <HiMiniUserGroup />,
    titulo: "Profissionalismo",
    descricao:
      "Consultora e profissional com conhecimento sólido do mercado de benefícios e planos de saúde.",
  },
];

export default function BeneficioPlanos() {
  return (
    <div className="flex flex-col gap-6 max-w-full mt-16 ">
      <h1 className="font-belleza text-6xl uppercase text-base-base">
        POR QUE A ESCOLHER MARGARETE PLANOS DE SAÚDE?
      </h1>
      <div className="flex flex-col px-6">
        {beneficiosPlanos.map((beneficio, index) => (
          <div
            className="flex m-2 p-4 bg-base-primary rounded drop-shadow-lg"
            key={index}
          >
            <IconContext.Provider value={{ size: "150" }}>
              {beneficio.icon}
            </IconContext.Provider>
            <div className="flex flex-col">
              <h4 className="font-belleza text-4xl font-semibold">
                {beneficio.titulo}
              </h4>
              <p className="font-belleza text-3xl mt-1">
                {beneficio.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
