import { useState } from "react"
import { planoLogos } from "..";

type CardPlanoSaude = {
    index: number,
    planos: typeof planoLogos[0]
}

const CardPlanoSaude: React.FC<CardPlanoSaude> = ({ index, planos }) => {
    const [showSaberMais, setShowSaberMais] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center shadow-lg p-6 h-40
             rounded-md transition ease-in-out delay-50 hover:scale-110 duration-100"
                onMouseOver={() => setShowSaberMais(true)} onMouseOut={() => setShowSaberMais(false)}>
                <img
                    className="object-contain max-h-36"
                    key={index}
                    src={planos.src}
                />
            </div>
            {showSaberMais &&
                <div className={
                    'flex justify-center items-center text-2xl text-base-base bg-base-tertiary ease-in-out duration-900 -translate-y-5' +
                    (showSaberMais && ' translate-y-0 scale-110')
                }
                >
                    <h4>Saber mais</h4>
                </div>
            }

        </div>
    )
}

export default CardPlanoSaude;
