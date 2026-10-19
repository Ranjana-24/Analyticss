import { IoMdSearch } from "react-icons/io";
import { TbLayoutSidebar } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import NavData from "../../data/Navdata";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedYear } from "../../redux/EcommerceSlice";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Select from "react-select";

export default function Navbar() {
  const options = [
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
  ];
  const dispatch = useDispatch();
  const selectedYear = useSelector((state) => state.ecommerce.selectedYear);

  const [issidebarOpen, setIssidebarOpen] = useState(false);

  const [isMobileArrowOpen, setIsMobileArrowOpen] = useState(null);
  return (
    <>
      <div className="flex gap-4 md:gap-10 flex-col sm:w-full sm:object-contain md:flex-row relative ">
        {/* mobile sidebar start */}
        <span className="flex items-center gap-2 ">
          <button
            className="block md:hidden text-2xl"
            onClick={() => setIssidebarOpen(!issidebarOpen)}
          >
            {issidebarOpen ? null : (
              <TbLayoutSidebar className="text-purple-900" />
            )}
          </button>

          <AnimatePresence>
            {issidebarOpen && (
              <>
                {/* Outside overlay */}
                <button
                  className="fixed inset-0 bg-black/20 z-40 md:hidden h-screen"
                  onClick={() => setIssidebarOpen(false)}
                />
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-purple-100 flex flex-col md:hidden 
                  w-2/4 h-full px-6 py-5 gap-8 rounded fixed top-0 left-0 z-50"
                >
                  {NavData.map((item, index) => (
                    <div className="flex flex-col relative w-full " key={index}>
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
                        className="flex absolute top-0 right-0"
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
                        <div className="flex flex-col gap-5 mt-5 items-center h-full ">
                          {item.children.map((child, childIndex) => (
                            <div
                              key={childIndex}
                              className="font-lato text-sm  w-full
                         text-gray-600"
                            >
                              <h4>{child.title}</h4>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* mobile sidebar close */}
          <h2 className="font-lato text-[#6E39CB] text-xl md:text-2xl font-semibold flex gap-2 text-center ">
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
        <div
          className="flex flex-row justify-between  border border-gray-300 rounded-full bg-white px-2 
        text-sm "
        >
          <input type="text" placeholder="Search anything here..." />
          <IoMdSearch className="text-gray-300 text-xl m-2" />
        </div>
        {/* <select id="year" name="year" className="text-sm rounded-3xl px-2 font-lato
         text-purple-900 bg-purple-100 sm: py-2 sm:text-center cursor-pointer"
        value={selectedYear}
         options={options}
        onChange={(e) => dispatch(setSelectedYear(Number(e.target.value)))}
        >
          <option value="2026">2026</option>
          <option value="2025">2025</option>
        </select> */}
        <Select
          options={options}
          className="text-sm font-lato "
          value={options.find(
            (option) => Number(option.value) === selectedYear,
          )}
          onChange={(option) => dispatch(setSelectedYear(Number(option.value)))}
        />
      </div>
    </>
  );
}
