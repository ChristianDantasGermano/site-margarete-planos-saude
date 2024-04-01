import { useState } from "react";
import { planoLogos } from "..";
import { motion } from "framer-motion";
import { Modal } from "./Modal";
import { redirectToWhatApp } from "../../../../../components/Fab";

type CardPlanoSaude = {
  planos: (typeof planoLogos)[0];
};

const CardPlanoSaude: React.FC<CardPlanoSaude> = ({ planos }) => {
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
            className="flex flex-col bg-white justify-center items-center shadow-md p-4 h-32 md:h-32 w-full
             rounded z-10 cursor-pointer"
            onMouseOver={() => setSaberMais(animateSaberMaisShow)}
            onMouseOut={() => setSaberMais(animateSaberMaisHide)}
            onTouchStart={() => setSaberMais(animateSaberMaisShow)}
            onTouchEnd={() => setSaberMais(animateSaberMaisHide)}
            onClick={() => setOpenModal(true)}
          >
            <img
              className="w-full object-scale-down min-h-0"
              src={planos.src}
            />
          </div>
          <motion.div
            className="flex justify-center items-center text-xl text-base-base bg-base-tertiary z-0 rounded-b-md"
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
        <div className="flex flex-col justify-center items-center ">
          <img
            className="object-contain max-h-12  md:max-h-20 max-w-xs"
            src={planos.src}
          />
          <div className="p-2 m-2 max-h-[580px] overflow-hidden">
            {planos.paragrafos?.map((value, index) => (
              <p
                key={index}
                className="indent-8 font-belleza text-left p-1 text-sm "
              >
                {value}
              </p>
            ))}
            {planos.obs && (
              <p className="font-belleza text-left font-semibold p-1 text-sm ">
                {planos.obs}
              </p>
            )}
          </div>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={redirectToWhatApp}
            className="bg-base-tertiary p-2 w-1/2 drop-shadow-lg flex justify-center items-center cursor-pointer"
          >
            <button className="font-belleza text-base hover: scale-105 text-white">
              Saber mais
            </button>
          </motion.div>
        </div>
      </Modal>
    </>
  );
};

export default CardPlanoSaude;
