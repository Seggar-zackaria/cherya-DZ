import { callouts } from "../../data/Data";

import { NavLink } from "react-router-dom";

export default function CategoryCard() {
  return (
    <div className="bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:max-w-none lg:py-32">
          <h3 className="text-3xl font-extrabold md:text-5xl">CATEGORIE</h3>
          <div
            className={`mt-6 space-y-4 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0`}
          >
            {callouts.map((callout) => (
              <div key={callout.name}>
                <NavLink to={callouts.href}>
                  <div className={`relative group`}>
                    <div
                      className={`relative w-full overflow-hidden bg-black rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64`}
                    >
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="object-cover object-center w-full h-full transition-all duration-700 ease-in-out group-hover:scale-125"
                      />
                    </div>
                    <h3 className="absolute group-hover:block hidden w-full text-center text-5xl font-extrabold text-white top-[50%] -translate-y-[50%]">
                      {callout.name}
                    </h3>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
