import NavData from "../../data/Navdata";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { TbLayoutSidebar } from "react-icons/tb";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <div className="p-4 mt-5 ">
        {/* <button>
          <TbLayoutSidebar />
        </button> */}
        {NavData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between mb-5 cursor-pointer hover:bg-purple-100"
            onClick={() => setIsOpen(isOpen === index ? null : index)}
          >
            <div className="flex gap-3 py-1.5">
              <img src={item.icon} alt={item.title} className="w-4 h-4 m-1" />
              <h2>{item.title}</h2>
            </div>

            {isOpen === index ? (
              <FaAngleUp className="m-2" />
            ) : (
              <FaAngleDown className="m-2" />
            )}

            {/* children */}
            {isOpen === index && (
              <div className="flex flex-col w-full gap-2 pl-10">
                {item.children.map((child, childIndex) => (
                  <div
                    key={childIndex}
                    className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-purple-100 hover:text-purple-700"
                  >
                    {child.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
