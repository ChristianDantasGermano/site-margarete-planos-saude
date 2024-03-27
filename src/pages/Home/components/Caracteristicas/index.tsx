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
    <div className="flex flex-col justify-center items-center p-8 bg-base-tertiary opacity-90">
      <div className=" lg:w-8/12">
        <div className=" flex flex-col justify-center items-center">
          <h4 className="font-belleza text-xl lg:text-2xl text-base-base">
            Por que escolher <b>Margarete planos de saúde?</b>
          </h4>
          <p className="font-belleza text-sm text-left text-base-base mt-4">
            Entregamos os resultados que você busca com agilidade e
            descomplicação visando sua completa satisfação, pois, consideramos
            nossos clientes o nosso maior patrimônio.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-5 mx-4 lg:mx-16 ">
            {caracteristicas.map((value, index) => (
              <div className="flex flex-col" key={index}>
                <h6 className="text-base-base text-base font-semibold font-belleza">
                  {value.titulo}
                </h6>
                <p className="pl-2 lg:pl-4 text-sm text-base-base font-belleza">
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
