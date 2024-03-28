import { RiWhatsappFill } from "react-icons/ri";
import { animate, motion } from "framer-motion";
export const redirectToWhatApp = () => {
  window.open("https://wa.me/5513991519057");
};

export default function Fab() {
  return (
    <motion.button
      className="fixed bottom-10 right-8 z-50 rounded-full drop-shadow-lg lg:flex justify-center items-center"
      onClick={redirectToWhatApp}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="hidden lg:block">
        <RiWhatsappFill size={65} color="#25D366" />
      </div>
      <div className="lg:hidden">
        <RiWhatsappFill size={50} color="#25D366" />
      </div>
    </motion.button>
  );
}
