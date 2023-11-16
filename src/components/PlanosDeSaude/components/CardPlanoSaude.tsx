import { useState } from "react";
import { planoLogos } from "..";
import { motion } from "framer-motion";

type CardPlanoSaude = {
  index: number;
  planos: (typeof planoLogos)[0];
};

const CardPlanoSaude: React.FC<CardPlanoSaude> = ({ index, planos }) => {
  const animateSaberMaisHide = -30;
  const animateSaberMaisShow = 0;

  const [saberMais, setSaberMais] = useState(animateSaberMaisHide);

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
    >
      <div className="flex flex-col">
        <div
          className="flex flex-col justify-center items-center shadow-lg p-6 h-40
             rounded z-50"
          onMouseOver={() => setSaberMais(animateSaberMaisShow)}
          onMouseOut={() => setSaberMais(animateSaberMaisHide)}
        >
          <img
            className="object-contain max-h-36"
            key={index}
            src={planos.src}
          />
        </div>
        <motion.div
          className="flex justify-center items-center text-2xl text-base-base bg-base-tertiary z-0"
          animate={{ y: saberMais }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h4>Saber mais</h4>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardPlanoSaude;
