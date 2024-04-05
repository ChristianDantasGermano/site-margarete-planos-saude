import Logo from "../../assets/images/logo.png";
import { RiWhatsappFill } from "react-icons/ri";
import { redirectToWhatApp } from "../Fab";
export default function Footer() {
  return (
    <footer className="flex flex-col justify-start bg-base-primary  p-2">
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-96 px-4 pt-4 md:pt-8 md:px-12">
        <div className="flex justify-center items-center">
          <img className="max-h-12 md:max-h-16" src={Logo} />
        </div>
        <div className="flex  flex-col justify-center items-center">
          <h4 className="font-dancingScript font-normal text-base md:text-xl">
            Tem dúvidas? Tire todas suas dúvidas pelo WhatsApp
          </h4>
          <div
            className="md:hidden  md:p-2 cursor-pointer hover:opacity-95 active:opacity-90"
            onClick={redirectToWhatApp}
          >
            <RiWhatsappFill size={40} />
          </div>
          <div
            className="hidden md:block p-2 cursor-pointer hover:opacity-95 active:opacity-90"
            onClick={redirectToWhatApp}
          >
            <RiWhatsappFill size={45} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <h6 className="font-sans font-normal text-sm">
          2024 - Desenvolvido por Christian Dantas Germano
        </h6>
      </div>
    </footer>
  );
}
