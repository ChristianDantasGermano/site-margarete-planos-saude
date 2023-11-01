import { ReactNode } from "react"

export default function PlanoSaudeOptions() {
  const planoLogos = [
    {
      src: "../PlanosIcons/amil_facil.png",
    },
    {
      src: "../PlanosIcons/Amil_logo.png",
    },
    {
      src: "../PlanosIcons/ana_costa_saude.png",
    },
    {
      src: "../PlanosIcons/blueMea.png",
    },
    {
      src: "../PlanosIcons/bradesco_saude_logo.png",
    },
    {
      src: "../PlanosIcons/logo_blue_med_senior.png",
    },
    {
      src: "../PlanosIcons/notredame_intermedica.png",
    },
    {
      src: "../PlanosIcons/porto_saude.png",
    },
    {
      src: "../PlanosIcons/trasmontano_saude.png",
    },
    {
      src: "../PlanosIcons/Prevent_Senior_logo.png",
    },
    {
      src: "../PlanosIcons/santaCasaSantos.png",
    },
    {
      src: "../PlanosIcons/sulamerica_saude_logo.png",
    },
    {
      src: "../PlanosIcons/unimed_santos.png",
    },
  ]

  const planosList = (): ReactNode | null => {
    let tempPlanoList = [...planoLogos]
    let col01 = tempPlanoList.splice(0, 4)
    let col02 = tempPlanoList.splice(0, 5)
    let col03 = tempPlanoList.splice(0, 4)
    return (
      <div className="grid grid-cols-3 gap-6 mt-5 mx-16 ">
        {colList(col01)}
        {colList(col02)}
        {colList(col03)}
      </div>
    )
  }

  const colList = (planos: typeof planoLogos): ReactNode | null => {
    return (
      <div className="flex flex-col gap-6">
        {planos.map((planos, index) => (
          <div className="flex justify-center items-center shadow-lg p-6 h-40 rounded-md">
            <img
              className="object-contain max-h-36"
              key={index}
              src={planos.src}
            />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col justify-center items-center bg-base-base p-10">
      <div className="w-8/12">{planosList()}</div>
    </div>
  )
}
