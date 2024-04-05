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
    <div className="flex flex-col gap-6 max-w-full mt-4 ">
      <h1 className="font-dancingScript font-bold text-4xl text-gray-700">
        Por que escolher Margarete planos de saúde?
      </h1>
      <div className="flex flex-col px-3 md:px-6">
        {beneficiosPlanos.map((beneficio, index) => (
          <div
            className="flex flex-col md:flex-row m-2 p-4 bg-base-primary rounded drop-shadow-lg"
            key={index}
          >
            <div className="md:hidden p-1">
              <IconContext.Provider value={{ size: "40" }}>
                {beneficio.icon}
              </IconContext.Provider>
            </div>
            <div className="hidden md:block">
              <IconContext.Provider value={{ size: "80" }}>
                {beneficio.icon}
              </IconContext.Provider>
            </div>
            <div className="flex flex-col md:mx-4">
              <h4 className="font-dancingScript text-3xl font-bold">
                {beneficio.titulo}
              </h4>
              <p className="font-sans text-sm md:text-base mt-1">
                {beneficio.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
