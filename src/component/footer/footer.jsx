import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbPhone,
  TbLocation,
  TbMail,
} from "react-icons/tb";
import Logo from "../../../public/logo/logoRaw.svg";

function Footer() {
  return (
    <footer className='px-6 py-3 mx-auto max-w-7xl lg:px-8'>
      <div className='justify-between max-w-2xl py-16 lg:flex sm:py-24 lg:max-w-none'>
        <div className='lg:w-2/5'>
          <h3 className='mb-3 text-3xl font-extrabold'>SEBATEK</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since{" "}
          </p>
          <div className='flex'>
            <TbBrandFacebook
              className='text-3xl text-blue-600'
              title='Facebook'
            />
            <TbBrandInstagram
              className='text-3xl text-pink-500'
              title='Instagram'
            />
          </div>
        </div>
        <div className='mt-5 space-y-6 lg:w-2/4 lg:space-y-0 md:justify-between md:flex'>
          <div>
            <p className='mb-3 font-extrabold'>Contact</p>
            <ul>
              <li>
                <a
                  className='flex items-center gap-1 transition-all w-fit hover:border-b hover:border-black hover:delay-150 '
                  href='tel:0561022630'
                >
                  <i>
                    <TbPhone className='w-5 h-5' />
                  </i>
                  0561022630
                </a>
              </li>
              <li>
                <a
                  className='flex items-center gap-1 transition-all w-fit hover:border-b hover:border-black hover:delay-150 '
                  href='mailto:zakari0002@gmail.com'
                >
                  <i>
                    <TbMail />
                  </i>
                  contact@cheryaDZ.com
                </a>
              </li>
              <li>
                <a
                  className='flex items-center gap-1 transition-all w-fit hover:border-b hover:border-black hover:delay-150 '
                  href=''
                  target='_blank'
                >
                  <TbLocation />
                  Bachjarah, Bourouba
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className='mb-3 font-extrabold'>Products</p>
            <ul>
              <li>Classic </li>
              <li>Sport</li>
              <li>fashsion</li>
            </ul>
          </div>

          <div>
            <img src={Logo} alt='cheryadz boutique' title='cheryadz boutique' />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
