import NavData from "../../data/Navdata";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { TbLayoutSidebar } from "react-icons/tb";
import { Link } from "react-router-dom";
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
            className="flex flex-col mb-5 cursor-pointer hover:bg-purple-100 relative"
            onClick={() => setIsOpen(isOpen === index ? null : index)}
          >
            <div className="flex gap-3 py-1.5">
              <img src={item.icon} alt={item.title} className="w-4 h-4 m-1" />
              <Link to={item.path}>
                <h2>{item.title}</h2>
              </Link>
            </div>

            {isOpen === index ? (
              <FaAngleUp className="m-2 absolute top-1 right-0" />
            ) : (
              <FaAngleDown className="m-2 absolute top-1 right-0" />
            )}

            {/* children */}
            {isOpen === index && (
              <div className="flex flex-col w-full items-center ">
                {item.children.map((child, childIndex) => (
                  <Link to={child.path} key={childIndex}>
                    <div
                      className="rounded-md w-full px-4 py-2 text-sm text-gray-600
        text-center hover:bg-purple-400 hover:text-purple-100 m-2"
                    >
                      {child.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
