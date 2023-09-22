import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { Fragment } from "react";
const info = [
  {
    id: 0,
    icon: TbTruckDelivery,
    direction: "block",
    Title: "FAST DELIVERY",
    color: "text-blue-500",
    background: "bg-blue-500",
    backgroundBefore: "to-blue-500",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
  },
  {
    id: 1,
    icon: TbTruckReturn,
    direction: "flex-row-reverse",
    Title: "Shipping & Returns",
    color: "text-green-500",
    background: "bg-green-500",
    backgroundBefore: "to-green-500",
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
          className='max-w-2xl px-4 py-20 mx-auto borde sm:px-6 sm:py-28 lg:max-w-7xl lg:px-20'
        >
          <div
            className={`md:flex ${content.backgroundBefore} md:space-x-7 ${content.direction} `}
          >
            <div
              className={`relative before:absolute before:w-full before:h-full before:rounded-full before:blur-3xl before:bg-gradient-to-r before:from-cyan-500 ${content.backgroundBefore} `}
            >
              <content.icon
                className={` text-start lg:w-64 lg:h-64 h-52 w-52 ${content.color} `}
              />
            </div>
            <div>
              <div className={`mb-5 text-5xl ${content.color} font-extrabold`}>
                {content.Title}
              </div>
              <div className='text-gray-500 lg:w-4/5'>{content.content}</div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default InfoSection;
