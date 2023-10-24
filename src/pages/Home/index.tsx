import Slider from "../../components/Carroceu"
import Logo from "../../assets/images/logo.png"

function Home() {
  return (
    <div className="z-0 bg-white h-screen">
      <Slider />
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="grid grid-cols-3 gap-6 w-8/12 shadow-lg">
          <div className="col-span-2 flex flex-col">
          <h4 className="font-belleza font-semibold text-6xl">O satisfação de nossos clientes é oque nos motiva...</h4>
          <p className="font-belleza text-lg mt-4">
            São 16 anos de experiencia em planos de saúde. Solidez,
            credibilidade, experiência, flexibilidade. Essas são algumas das
            palavras que me norteiam, Margarete Planos de Saúde. Somente com
            muito trabalho, sendo feito de forma transparente e ágil,
            conseguirei conquistar a confiança de meus clientes.
          </p>
          <p className="font-belleza text-lg mt-2">
            Hoje posso dizer com imenso orgulho que já atendi mais de 5.000
            Pessoas e Empresas em toda Baixada Santista e São Paulo. Trazendo
            segurança, tranquilidade a nossos clientes. Tudo isso aliado a um
            atendimento com agilidade e sempre buscando as melhores condições,
            seja para Pessoa Física ou Pessoa Jurídica.
          </p>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              src={Logo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
