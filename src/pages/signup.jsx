import { NavLink } from "react-router-dom";
import Picture from "../../public/images/signinPic.jpg";
import Logo from "../../public/logo/logo.svg";
import Button from "../component/buttons/Btn";
const label = [
  { name: "name", placeholder: "name", wdith: "w-2/5" },
  { name: "familly name", placeholder: "familly name", wdith: "w-2/5" },
  { name: "addresse", placeholder: "addresse" },
  { name: "addresse", placeholder: "phone number" },
  { name: "email", placeholder: "email@example.com" },
  { name: "password", placeholder: "password" },
];

function Signup() {
  return (
    <>
      <div className="w-full h-screen align-middle ">
        <div className="flex items-center w-full h-full">
          <div className="relative hidden w-4/5 h-full overflow-hidden bg-pink-400 lg:block">
            <span className="absolute text-3xl font-extrabold text-white top-5 left-5 ">
              Sebatek
            </span>

            <img
              src={Picture}
              className="object-cover object-center w-full h-full "
              alt=""
            />
          </div>
          <div className="w-full h-full mx-5 lg:w-2/4 ">
            <div className="flex flex-col justify-center flex-1 min-h-full lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <NavLink to={"/"}>
                  <img
                    className="w-auto h-10 "
                    src={Logo}
                    alt="Sebatek Cherya-dz"
                  />
                </NavLink>

                <p className="mt-6 mb-3 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to{" "}
                  <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-600">
                    Sebatek
                  </span>
                </p>
                <p className="text-sm text-neutral-500">
                  Already a user?{" "}
                  <NavLink to="/signin" className={"text-green-400"}>
                    Signin
                  </NavLink>
                </p>
              </div>

              <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                {label.map((labels) => (
                  <form key={labels.name} action="#" method="POST">
                    <div>
                      <label
                        htmlFor={labels.name}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      ></label>
                      <div className="mt-2">
                        <input
                          id={labels.name}
                          name={labels.name}
                          type={labels.name}
                          autoComplete={labels.name}
                          placeholder={labels.placeholder}
                          required
                          className={`flex ${labels.wdith} p-3 w-full text-gray-900 border-0 rounded-md shadow-sm mt-7 focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-sky-500/10 focus:border-blue-500 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6`}
                        />
                      </div>
                    </div>
                  </form>
                ))}
                <div className="mt-2">
                  <div className="text-right"></div>
                  <Button
                    title={"Signup"}
                    className={"bg-sky-500 hover:bg-sky-400 text-white w-full "}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
