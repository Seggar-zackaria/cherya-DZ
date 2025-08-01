import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import CarouselBtn from "../HeroSection/CarouselBtn";
import { product } from "../../data/Data";
import { getImageUrl } from "../../data/utils";
const products = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  // images: [
  //   {
  //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
  //     alt: "Two each of gray, white, and black shirts laying flat.",
  //   },
  //   {
  //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
  //     alt: "Model wearing plain black basic tee.",
  //   },
  //   {
  //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
  //     alt: "Model wearing plain gray basic tee.",
  //   },
  //   {
  //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
  //     alt: "Model wearing plain white basic tee.",
  //   },
  // ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "36", inStock: false },
    { name: "37", inStock: true },
    { name: "38", inStock: true },
    { name: "39", inStock: true },
    { name: "40", inStock: true },
    { name: "41", inStock: true },
    { name: "42", inStock: true },
    { name: "43", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 3, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(products.colors[0]);
  const [selectedSize, setSelectedSize] = useState(products.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="overflow-hidden md:rounded-lg aspect-h-4 aspect-w-3 lg:block">
            <Swiper>
              {product.map((shoe) => (
                <SwiperSlide key={shoe.id}>
                  <div>
                    <div>
                      <div
                        className={`w-full overflow-hidde h-96 lg:h-[600px] sm:aspect-h-1 lg:aspect-h-1  lg:aspect-w-1 sm:h-96`}
                      >
                        <img
                          src={getImageUrl(shoe)}
                          alt={shoe.name}
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <CarouselBtn />
            </Swiper>{" "}
          </div>
          {/* <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
              <img
                src={products.images[1].src}
                alt={product.images[1].alt}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="object-cover object-center w-full h-full"
            />
          </div> */}
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {products.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="gap-3 text-3xl font-bold tracking-tight text-gray-900">
              {products.price}
              <small className="ml-3 font-normal text-gray-500">
                <del>{products.price}</del>
              </small>
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-500"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-green-500 hover:text-green-800"
                >
                  {reviews.totalCount} Stars
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {products.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Size</h3>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {products.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-1 ring-blue-500" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-blue-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Buy
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {products.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900">
                Highlights
              </h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                  {products.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-900 ">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{products.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
