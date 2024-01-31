import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
export default function Slider() {
  const customTheme: CustomFlowbiteTheme["carousel"] = {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };

  const images = [
    {
      src: "../Slider/casal_com_bebe.jpg",
      title: "Plano de saúde individual",
      subtitle:
        "Adoro todas as minhas versões que fizeram de mim quem sou hoje.",
    },
    {
      src: "../Slider/familia.jpg",
      title: "Planos de saúde familiar",
      subtitle:
        "Uma família unida e feliz é uma dádiva que dá trabalho, mas ainda assim, é um presente que sempre compensará",
    },
    {
      src: "../Slider/empresa.jpg",
      title: "Plano de saúde empresarial",
      subtitle:
        "“Quando algo é importante o suficiente, você realiza mesmo que as chances não estejam a seu favor.” Elon Musk ",
    },
    {
      src: "../Slider/avos_com_netos.jpg",
      title: "Planos de saúde sênior, direcionado para a melhor idade",
      subtitle:
        '"No final, não são os anos da sua vida que contam, e sim a vida ao longo desses anos” – Abraham Lincoln, 16º. presidente dos EUA',
    },
  ];

  return (
    <div className="z-0">
      <Carousel theme={customTheme} pauseOnHover>
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden cursor-pointer">
            <img
              className="object-cover lg:h-[660px] lg:w-full"
              alt="..."
              src={image.src}
            />
            <div className="absolute bottom-10 right-0 px-6 py-4 bg-base-secondary  w-1/2 opacity-80 drop-shadow-lg">
              <h2 className="mb-3 text-2xl font-belleza font-semibold tracking-tight text-black">
                {image.title}
              </h2>
              <p className="leading-normal font-belleza text-black text-xl">
                {image.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
