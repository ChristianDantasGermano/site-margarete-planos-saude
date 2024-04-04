import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

export const tipoPlanos = [
  {
    image: "../Blog/planos/pequena_empresa.jpg",
    titulo: "Plano MEI/PME",
    descricao:
      " Os planos para MEI e PME abrangem empresas de 02 à 99 vidas, contando geralmente com ampla rede própria certificada e também uma rede credenciada bem completa.",
    frase:
      "“Investir em você mesmo e nas suas conquistas, é investir na sua saúde.”",
  },
  {
    image: "../Blog/planos/grande_empresa.jpg",
    titulo: "Grandes Empresas",
    descricao:
      "Empresas a partir de 100 vidas contam vantagens como por exemplo facilidade na portabilidade e carências diferenciadas.",
    frase:
      "“O investimento em plano de saúde é aquele que possui o melhor retorno: uma ótima qualidade de vida!”",
  },
  {
    image: "../Blog/planos/plano_coletivo.jpg",
    titulo: "Planos coletivos por adesão",
    descricao:
      "Conhecido também como planos de saúde coletivos por adesão, esse tipo de plano é destinado para pessoas que possuem uma mesma formação profissional ou que são ligados a uma entidade de classe que os representa junto a uma empresa administradora de benefícios",
    frase:
      "“Sem saúde, será impossível correr atrás dos seus sonhos. Tornar isso sua prioridade é facilitar a conquista dos seus objetivos!”",
  },
  {
    image: "../Blog/planos/familia.jpg",
    titulo: "Plano Individuais e Familiares",
    descricao:
      "Um plano individual é a melhor opção para quem não tem dependentes e não possui convênio com planos de saúde na empresa em que trabalha. Enquanto os planos familiares ajudam a fornecer um atendimento de qualidade para conjuntos familiares.",
    frase: "“Ser saudável é uma escolha, basta você querer.”",
  },
  {
    image: "../Blog/planos/idosas.jpg",
    titulo: "Plano Sênior (Terceira Idade)",
    descricao:
      "O plano de saúde sênior tem como fundamento atuar na prevenção de doenças com uma série de ações que visam promover qualidade de vida e acesso à tratamento qualificado para conveniados a partir de 54 anos.",
    frase:
      "“Cuidar da sua saúde não é um luxo, muito menos um custo. É investir em você mesmo!”",
  },
];
export default function TipoPlanos() {
  return (
    <>
      <div className="flex flex-col gap-3 md:gap-6 max-w-full md:mt-16 mt-4">
        <h1 className="font-dancingScript font-bold text-4xl text-gray-700">
          Como escolher o tipo de plano certo?
        </h1>
      </div>
      <div className="flex gap-3 md:gap-6 mt-2 ">
        <div className="flex flex-col md:p-4">
          {tipoPlanos.map((beneficio, index) => (
            <div className="flex gap-4 md:m-6 overflow-hidden" key={index}>
              {index % 2 === 0 && (
                <div className="hidden md:flex h-full w-full max-h-[320px] max-w-[220px] ">
                  <AsyncImage
                    className="object-cover h-screen w-full max-h-[320px] max-w-[220px] rounded drop-shadow-lg"
                    src={beneficio.image}
                    Transition={(props) => <Blur radius={10} {...props} />}
                    loader={<div className="bg-base-tertiary" />}
                  />
                </div>
              )}
              <div className="flex flex-col grow p-4 ">
                <div className="md:hidden flex h-full w-full justify-center items-center ">
                  <AsyncImage
                    className="object-contain h-screen w-full max-h-[320px] max-w-[220px] rounded drop-shadow-md"
                    src={beneficio.image}
                    Transition={(props) => <Blur radius={10} {...props} />}
                    loader={<div className="bg-base-tertiary" />}
                  />
                </div>
                <h1 className="font-dancingScript text-xl md:text-3xl font-semibold text-gray-700 mt-2">
                  {beneficio.titulo}
                </h1>
                <h4 className="font-sans text-base md:text-base text-gray-700 md:w-11/12 text-left md:pt-2">
                  {beneficio.descricao}
                </h4>
                <h6 className="hidden md:block font-sans text-sm md:text-md italic text-gray-700 pl-6 pt-12 w-11/12 ">
                  {beneficio.frase}
                </h6>
              </div>
              {index % 2 === 1 && (
                <div className="hidden md:flex grow-0 w-full h-full max-h-[320px] max-w-[220px] ">
                  <AsyncImage
                    className="object-cover h-screen w-full max-h-[320px] max-w-[220px] rounded drop-shadow-lg"
                    src={beneficio.image}
                    Transition={(props) => <Blur radius={10} {...props} />}
                    loader={<div className="bg-base-tertiary" />}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
