import Slider from "../../components/Carroceu";
import Logo from "../../assets/images/logo.png";
import PlanoSaudeOptions from "../../components/PlanosDeSaude";

function Home() {
  return (
    <div className="z-0 bg-base-base h-screen">
      <Slider />
      <div className="flex flex-col justify-center bg-base-base items-center p-5">
        <div className="grid grid-cols-3 gap-6 w-8/12">
          <div className="col-span-2 flex flex-col">
            <h4 className="font-belleza font-semibold text-6xl">
              O satisfação de nossos clientes é oque nos motiva...
            </h4>
            <p className="font-belleza text-xl mt-4">
              São 16 anos de experiencia em planos de saúde. Solidez,
              credibilidade, experiência, flexibilidade. Essas são algumas das
              palavras que me norteiam, Margarete Planos de Saúde. Somente com
              muito trabalho, sendo feito de forma transparente e ágil,
              conseguirei conquistar a confiança de meus clientes.
            </p>
            <p className="font-belleza text-xl mt-2">
              Hoje posso dizer com imenso orgulho que já atendi mais de 5.000
              Pessoas e Empresas em toda Baixada Santista e São Paulo. Trazendo
              segurança, tranquilidade a nossos clientes. Tudo isso aliado a um
              atendimento com agilidade e sempre buscando as melhores condições,
              seja para Pessoa Física ou Pessoa Jurídica.
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img src={Logo} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-16 drop-shadow-md bg-base-tertiary opacity-90">
        <div className=" w-8/12">
          <div className=" flex flex-col justify-center items-center">
            <h4 className="font-belleza text-4xl uppercase text-base-base">
              Por que escolher <b>Margarete Planos de Saúde?</b>
            </h4>
            <p className="font-belleza text-xl text-base-base mt-8">
              Entregamos os resultados que você busca com agilidade e
              descomplicação visando sua completa satisfação, pois, consideramos
              nossos clientes o nosso maior patrimônio.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-5 mx-16 ">
              <div className="flex flex-col gap-6">
                <div>
                  <h6 className="text-base-base font-semibold font-belleza">Contratação</h6>
                  <p className="text-base-base font-belleza">
                    e cotação 100% online de acordo com seu perfil
                  </p>
                </div>
                <div>
                  <h6 className="text-base-base font-semibold font-belleza">
                    Melhores preços
                  </h6>
                  <p className="text-base-base font-belleza">Cotação Online</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h6 className="text-base-base font-semibold font-belleza">
                    Relacionamento
                  </h6>
                  <p className="text-base-base font-belleza">
                    personalizado e pessoal sempre visando atender suas
                    necessidades
                  </p>
                </div>
                <div>
                  <h6 className="text-base-base font-semibold font-belleza">
                    Soluções de acordo
                  </h6>
                  <p className="text-base-base font-belleza">
                    com sua necessidades através das melhores operadoras com o
                    melhor custo benefício
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h6 className="text-base-base font-semibold font-belleza">
                    Mais de 15 anos
                  </h6>
                  <p className="text-base-base font-belleza">
                    no Mercado de Seguro e Planos de Saúde
                  </p>
                </div>
                <div>
                  <h6 className="text-base-base font-semibold font-belleza">
                    Atendimento pessoal
                  </h6>
                  <p className="text-base-base font-belleza">
                    aqui você fala com a gente de verdade através de whatsapp,
                    telefone e email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PlanoSaudeOptions />
    </div>
  );
}

export default Home;
