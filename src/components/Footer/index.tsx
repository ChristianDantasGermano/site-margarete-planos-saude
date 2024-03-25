import Logo from "../../assets/images/logo.png";
import { RiWhatsappFill } from "react-icons/ri";
import { redirectToWhatApp } from "../Fab";
export default function Footer() {
  return (
    <footer className="flex flex-col justify-start bg-base-primary  p-2">
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-96 px-4 pt-4 lg:pt-8 lg:px-12">
        <div className="flex justify-center items-center">
          <img className="max-h-12 lg:max-h-16" src={Logo} />
        </div>
        <div className="flex  flex-col justify-center items-center">
          <h4 className="font-belleza font-normal text-sm lg:text-xl">
            Tem dúvidas? Tire todas suas dúvidas pelo WhatsApp
          </h4>
          <div
            className="lg:hidden  lg:p-2 cursor-pointer hover:opacity-95 active:opacity-90"
            onClick={redirectToWhatApp}
          >
            <RiWhatsappFill size={40} />
          </div>
          <div
            className="hidden p-2 cursor-pointer hover:opacity-95 active:opacity-90"
            onClick={redirectToWhatApp}
          >
            <RiWhatsappFill size={60} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <h6 className="font-belleza font-normal text-sm">
          2024 - Desenvolvido por Christian Dantas Germano
        </h6>
      </div>
    </footer>
  );
}
