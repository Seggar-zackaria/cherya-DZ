import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { Fragment } from "react";
const info = [
  {
    id: 0,
    icon: TbTruckDelivery,
    direction: "block",
    Title: "FAST DELIVERY",
    color: "text-blue-500",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
  },
  {
    id: 1,
    icon: TbTruckReturn,
    direction: "flex-row-reverse",
    Title: "Shipping & Returns",
    color: "text-green-600",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
  },
];

function InfoSection() {
  return (
    <Fragment>
      {info.map((content) => (
        <div
          key={content.id}
          className="max-w-2xl px-4 py-10 mx-auto lg:py-20 sm:px-6 sm:py-28 lg:max-w-7xl lg:px-20"
        >
          <div className={`lg:flex  md:mx-12 ${content.direction}`}>
            <div
              className={`p-5 lg:flex hidden justify-center items-center rounded-3xl bg-gradient-to-br from-green-400 to-sky-600`}
            >
              <content.icon className={`w-44 h-44 text-white `} />
            </div>
            <div className="p-8 mx-5 border border-gray-300 sm:mt-6 md:mt-0 rounded-3xl">
              <div
                className={`mb-5 text-2xl md:text-4xl ${content.color} font-extrabold`}
              >
                {content.Title}
              </div>
              <div className="text-gray-500 ">{content.content}</div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default InfoSection;
