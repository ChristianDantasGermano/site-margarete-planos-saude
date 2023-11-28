import { useState } from "react";
import { planoLogos } from "..";
import { motion } from "framer-motion";
import { Modal } from "../../Modal";

type CardPlanoSaude = {
  index: number;
  planos: (typeof planoLogos)[0];
};

const CardPlanoSaude: React.FC<CardPlanoSaude> = ({ index, planos }) => {
  const animateSaberMaisHide = -35;
  const animateSaberMaisShow = 0;

  const [saberMais, setSaberMais] = useState(animateSaberMaisHide);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col">
          <div
            className="flex flex-col bg-base-base justify-center items-center shadow-lg p-8 h-40
             rounded z-10 cursor-pointer"
            onMouseOver={() => setSaberMais(animateSaberMaisShow)}
            onMouseOut={() => setSaberMais(animateSaberMaisHide)}
            onClick={() => setOpenModal(true)}
          >
            <img
              className="object-contain max-h-32 max-w-xs"
              key={index}
              src={planos.src}
            />
          </div>
          <motion.div
            className="flex justify-center items-center text-2xl text-base-base bg-base-tertiary z-0 rounded-b-md"
            animate={{ y: saberMais }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h4>Saber mais</h4>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Modal isOpen={openModal} handleClose={() => setOpenModal(false)}>
        <div className="flex flex-col justify-center items-center">
          <img
            className="object-contain max-h-28 max-w-xs"
            key={index}
            src={planos.src}
          />
          <div className="p-2 m-2">
            {planos.paragrafos?.map((value) => (
              <p className="indent-8 font-belleza text-left p-1 text-lg">
                {value}
              </p>
            ))}
            {planos.obs && (
              <p className="font-belleza text-left font-semibold p-1 text-lg">
                {planos.obs}
              </p>
            )}
          </div>
          <motion.div
            className="bg-base-tertiary p-2 w-1/2 drop-shadow-lg flex justify-center items-center cursor-pointer"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 1 }}
          >
            <button className="font-belleza text-2xl hover: scale-105">
              Saber mais
            </button>
          </motion.div>
        </div>
      </Modal>
    </>
  );
};

export default CardPlanoSaude;
