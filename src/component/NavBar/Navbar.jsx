import Logo from "../../../public/logo/logo.svg";
import LogoRaw from "../../../public/logo/logoRaw.svg";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="hidden w-auto h-8 lg:block" src={Logo} alt="" />
            <img className="w-auto h-8 lg:hidden" src={LogoRaw} alt="" />
          </NavLink>
        </div>
        <span className="text-lg font-semibold lg:text-3xl lg:font-bold lg:flex">
          SEBATEK
        </span>
        <div className="flex lg:hidden">
          <button>
            <MagnifyingGlassIcon className="h-6 mr-2 leading-6 text-gray-900 w-fit" />
          </button>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover.Group className="hidden lg:flex lg:gap-x-8">
            <NavLink
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Women
            </NavLink>
            <NavLink
              to="/category"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Man
            </NavLink>
          </Popover.Group>
          <button>
            <MagnifyingGlassIcon className="h-6 ml-5 leading-6 text-gray-900 w-fit" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-3 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="w-auto h-8" src={Logo} alt="" />
            </NavLink>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6">
              <div className="py-6 space-y-2">
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Men
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Women
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
