import { useState } from "react";
import { planoLogos } from "..";
import { motion } from "framer-motion";
import { Button, Modal } from "flowbite-react";

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
      >
        <div className="flex flex-col">
          <div
            className="flex flex-col bg-base-base justify-center items-center shadow-lg p-6 h-40
             rounded z-10 cursor-pointer"
            onMouseOver={() => setSaberMais(animateSaberMaisShow)}
            onMouseOut={() => setSaberMais(animateSaberMaisHide)}
            onClick={() => setOpenModal(true)}
          >
            <img
              className="object-contain max-h-36"
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
      <Modal
        show={openModal}
        size="4xl"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col justify-center items-center">
            <img
              className="object-contain max-h-24"
              key={index}
              src={planos.src}
            />
            <div className="p-2 m-2">
              {planos.paragrafos?.map((value) => (
                <p className="font-belleza text-left p-1">{value}</p>
              ))}
              {planos.obs && (
                <p className="font-belleza text-left font-semibold p-1">
                  {planos.obs}
                </p>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardPlanoSaude;
