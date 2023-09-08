import { BsStars } from "react-icons/bs";
import { getImageUrl } from "../../data/utils";
import { CardProduct } from "../../data/Data";

import { NavLink } from "react-router-dom";

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="flex text-3xl font-extrabold tracking-tight text-gray-900 uppercase md:text-5xl">
            <BsStars className="h-8 text-fuchsia-600" />
            new arrivage
          </h2>
        </div>
        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {CardProduct.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={getImageUrl(product)}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="font-bold text-gray-700 ">
                    <NavLink to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </NavLink>
                  </h3>
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">{product.price}</p>
                    <small className="text-neutral-500">
                      <del> {product.oldPrice} </del>
                    </small>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 ">{product.color}</p>
                </div>
                <p className="flex gap-1 text-sm font-medium leading-4">
                  <product.icon className="text-yellow-500" />
                  <p>{product.rate}</p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
