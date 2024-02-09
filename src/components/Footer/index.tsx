import Logo from "../../assets/images/logo.png";
import { RiWhatsappFill } from "react-icons/ri";
import { redirectToWhatApp } from "../Fab";
export default function Footer() {
  return (
    <footer className="flex flex-col justify-start bg-base-primary  p-7">
      <div className="flex justify-center gap-96 pt-8 px-12">
        <div className="flex justify-center items-center">
          <img src={Logo} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="font-belleza font-normal text-xl">
            Tem dúvidas? Tire todas suas dúvidas pelo WhatsApp
          </h4>
          <div
            className="p-2 cursor-pointer hover:opacity-95 active:opacity-90"
            onClick={redirectToWhatApp}
          >
            <RiWhatsappFill size={60} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <h6 className="font-belleza font-normal text-sm">
          2024 - Desenvolvido por Christian Dantas Germano
        </h6>
      </div>
    </footer>
  );
}
