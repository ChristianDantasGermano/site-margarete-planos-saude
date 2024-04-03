export const caracteristicas = [
  {
    titulo: "Contratação",
    texto: "Cotação 100% online de acordo com seu perfil",
  },
  {
    titulo: "Melhores preços",
    texto: "Cotação Online",
  },
  {
    titulo: "Relacionamento",
    texto: "Personalizado e pessoal sempre visando atender suas necessidades",
  },
  {
    titulo: "Soluções de acordo",
    texto:
      "Com sua necessidades através das melhores operadoras com o melhor custo benefício",
  },
  {
    titulo: "Mais de 15 anos",
    texto: "Mercado de Seguro e Planos de Saúde",
  },
  {
    titulo: "Atendimento pessoal",
    texto:
      "Você fala com a gente de verdade através de whatsapp, telefone e email",
  },
];

export default function Caracteristicas() {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-base-tertiary opacity-90 ">
      <div className="QHDPLUS:w-4/12 QHD:w-6/12 md:w-8/12">
        <div className="flex flex-col">
          <h4 className="font-glacialIndifference text-xl md:text-2xl text-gray-700">
            Por que escolher <b>Margarete planos de saúde?</b>
          </h4>
          <p className="font-sans text-sm text-left mt-4 text-gray-700">
            Entregamos os resultados que você busca com agilidade e
            descomplicação visando sua completa satisfação, pois, consideramos
            nossos clientes o nosso maior patrimônio.
          </p>
          <div className="flex flex-col md:gap-4 gap-2 mt-2">
            {caracteristicas.map((value, index) => (
              <div className="flex flex-col md:gap-1" key={index}>
                <h6 className=" text-base font-semibold font-glacialIndifference text-gray-700">
                  {value.titulo}
                </h6>
                <p className="pl-2 md:pl-4 text-sm  font-sans text-justify text-gray-700">
                  {value.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
