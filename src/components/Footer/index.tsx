import Logo from "../../assets/images/logo.png";
import { RiWhatsappFill } from "react-icons/ri";
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
          <div className="p-2 cursor-pointer">
            <RiWhatsappFill size={60} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <h6 className="font-belleza font-normal text-sm">
          Christian Dantas Germano @ 2024
        </h6>
      </div>
    </footer>
  );
}
