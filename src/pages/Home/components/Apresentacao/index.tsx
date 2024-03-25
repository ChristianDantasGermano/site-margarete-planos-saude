import Logo from "../../../../assets/images/logo.png";
export default function Apresentacao() {
  return (
    <div className="flex flex-col justify-center bg-base-base items-center p-6 mt-4 lg:mt-12">
      <div className="lg:grid lg:grid-cols-3 gap-6 lg:w-8/12 ">
        <div className="lg:col-span-2 flex flex-col">
          <h4 className="font-belleza font-bold text-xl lg:p-2">
            O satisfação de nossos clientes é o que nos motiva...
          </h4>
          <p className="font-belleza text-sm p-2 mt-4 indent-8">
            São 16 anos de experiencia em planos de saúde. Solidez,
            credibilidade, experiência, flexibilidade. Essas são algumas das
            palavras que me norteiam, Margarete Planos de Saúde. Somente com
            muito trabalho, sendo feito de forma transparente e ágil,
            conseguirei conquistar a confiança de meus clientes.
          </p>
          <p className="font-belleza text-sm p-2 mt-2 indent-8">
            Hoje posso dizer com imenso orgulho que já atendi mais de 5.000
            Pessoas e Empresas em toda Baixada Santista e São Paulo. Trazendo
            segurança, tranquilidade a nossos clientes. Tudo isso aliado a um
            atendimento com agilidade e sempre buscando as melhores condições,
            seja para pessoa física ou pessoa jurídica.
          </p>
        </div>
        <div className="p-6  lg:col-span-1 flex justify-center items-center">
          <img className="max-h-12" src={Logo} />
        </div>
      </div>
    </div>
  );
}
