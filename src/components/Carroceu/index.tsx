import { Carousel } from 'flowbite-react';
export default function Slider() {
    const images = [
        {
            src:'../Slider/casal_com_bebe.jpg',
            title:'Plano de saúde individual',
            subtitle:'Adoro todas as minhas versões que fizeram de mim quem sou hoje.'
        },
        {
            src:'../Slider/familia.jpg',
            title:'Planos de saúde familiar',
            subtitle:'Uma família unida e feliz é uma dádiva que dá trabalho, mas ainda assim, é um presente que sempre compensará'
        },
        {
            src:'../Slider/empresa.jpg',
            title:'Plano de saúde empresarial',
            subtitle:'“Quando algo é importante o suficiente, você realiza mesmo que as chances não estejam a seu favor.” Elon Musk '
        },
        {
            src:'../Slider/avos_com_netos.jpg',
            title:'Planos de saúde sênior, direcionado para a melhor idade',
            subtitle:'"No final, não são os anos da sua vida que contam, e sim a vida ao longo desses anos” – Abraham Lincoln, 16º. presidente dos EUA'
        },
    ]

    return (
      <div className=''>
        <Carousel pauseOnHover>
          {
            images.map((image)=>(
              
              <div className='relative overflow-hidden rounded-lg shadow-lg cursor-pointer'>              
              <img
              className='object-cover lg:h-[660px] lg:w-full'
              alt="..."
              src={image.src}
            />
            <div className="absolute bottom-10 right-0 px-6 py-4 bg-base-secondary  w-1/2 opacity-80 drop-shadow-lg">
	  <h2 className="mb-3 text-2xl font-belleza font-semibold tracking-tight text-black">{image.title}</h2>
	  <p className="leading-normal font-belleza text-black text-xl" >{image.subtitle}</p>
	</div>
             </div>)
          )
          }
    </Carousel>
      </div>
    );
}