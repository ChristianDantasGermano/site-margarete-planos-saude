import { RiWhatsappFill } from "react-icons/ri";
export const redirectToWhatApp = () => {
  window.open("https://wa.me/5513991519057");
};

export default function Fab() {
  return (
    <button
      className="fixed bottom-10 right-8  z-50 rounded-full drop-shadow-lg flex justify-center items-center
    hover:drop-shadow-2xl hover:animate-bounce duration-200 active:opacity-90 active:shadow-inner"
      onClick={redirectToWhatApp}
    >
      <RiWhatsappFill size={70} />
    </button>
  );
}
