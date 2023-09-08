import { TbFaceId } from "react-icons/tb";
import Logo from "../../../public/logo/logoRaw.svg";

function Footer() {
  return (
    <footer className="items-center justify-between px-6 py-3 mx-auto max-w-7xl lg:px-8">
      <div className="flex max-w-2xl py-16 sm:py-24 lg:max-w-none">
        <div>
          <h3 className="text-3xl font-extrabold">SEBATEK</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since{" "}
          </p>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <p>0561022630</p>
          <p>contact@cheryaDZ.com</p>
          <p>Bachjarah, Bourouba</p>
        </div>
        <div>
          <p className="font-bold">Products</p>
          <p>Classic </p>
          <p>Sport</p>
          <p>swag</p>
        </div>
        <div>
          <img src={Logo} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
