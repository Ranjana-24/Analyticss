import { IoMdSearch } from "react-icons/io";
import { TbLayoutSidebar } from "react-icons/tb";
import { GiCancel } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import NavData from "../../data/Navdata";
import logo from "../../assets/logo.png";
import { useState } from "react";
export default function Navbar() {
  const [issidebarOpen, setIssidebarOpen] = useState(false);
  // mobile sidebaropen
  const [isMobileArrowOpen, setIsMobileArrowOpen] = useState(null);
  return (
    <>
      <div className="flex gap-4 md:gap-10 flex-col sm:w-full sm:object-contain md:flex-row relative ">
        {/* mobile sidebar start */}
        <span>
          <div className="fixed top-5 right-0">
            <button
              className="block md:hidden absolute top-0 right-0 mb-2 text-xl "
              onClick={() => setIssidebarOpen(!issidebarOpen)}
            >
              {issidebarOpen ? (
                <GiCancel className="text-xl text-red-600" />
              ) : (
                <TbLayoutSidebar className="text-purple-900" />
              )}
            </button>
          </div>
          {issidebarOpen && (
            <div
              className="bg-purple-100 flex  md:hidden w-1/3 h-screen  flex-col px-6 py-5 gap-8 rounded fixed top-10 
            right-5 z-50"
            >
              {NavData.map((item, index) => (
                <div className="flex justify-between" key={index}>
                  <h4>{item.title}</h4>
                  {/* <MdKeyboardArrowDown
                    className="text-xl text-gray-500"
                    onClick={() =>
                      setIsMobileArrowOpen(
                        isMobileArrowOpen === index ? null : index,
                      )
                    }
                  /> */}
                  <div
                    onClick={() =>
                      setIsMobileArrowOpen(
                        isMobileArrowOpen === index ? null : index,
                      )
                    }
                  >
                    {isMobileArrowOpen === index ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </div>
                  {isMobileArrowOpen === index && (
                    <div className="flex flex-col gap-5 mt-5 items-center">
                      {item.children.map((child, childIndex) => (
                        <div key={childIndex}>
                          <h4>{child.title}</h4>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* mobile sidebar close */}
          <h2 className="font-lato text-[#6E39CB] text-xl md:text-2xl font-semibold flex gap-2">
            Analytics{" "}
            <span>
              <img
                src={logo}
                alt="logo"
                className="w-5 h-5 mt-1 block md:hidden"
              />
            </span>
          </h2>
        </span>
        <div className="flex flex-row border border-gray-300 rounded-full bg-white px-2 text-sm">
          <input type="text" placeholder="Search anything here..." />
          <IoMdSearch className="text-gray-300 text-xl m-2" />
        </div>
      </div>
    </>
  );
}
