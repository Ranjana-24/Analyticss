import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import DraggableTask from "../TodoSection/DraggableTask";
import DroppableColumn from "../TodoSection/DropabbleColumn";
import { useState } from "react";
import ConfirmDltModal from "../../pages/ConfirmDltModal";
export default function TaskColumn({ title, data }) {
  const [confirmDlt, setConfirmDlt] = useState(false);
  return (
    <DroppableColumn id={`column-${title}`}>
      <ConfirmDltModal isOpen={confirmDlt} setIsOpen={setConfirmDlt} />
      <div className="bg-gray-100 w-full flex flex-col gap-4 px-2 h-screen ">
        {/* Header */}
        <div className="flex justify-between py-3">
          <MdKeyboardArrowLeft className="text-2xl cursor-pointer" />
          <h1 className="font-lato text-[110%] font-semibold">{title}</h1>
          <FaPlus
            className="text-xl cursor-pointer"
            onClick={() => setConfirmDlt(true)}
          />
        </div>
        {/* header end */}

        {/* cards start */}
        <div className=" h-screen overflow-y-auto flex flex-col gap-2 mb-2 pr-1">
          {data.map((item, index) => (
            <DraggableTask
              // key={`${title}-${item.id}`}
              //   id={`${title}-${item.id}`}
              key={index}
              id={item.uid}
              index={index}
              column={title}
            >
              <div
                key={index}
                className="bg-white font-lato rounded-xl cursor-pointer p-2 relative "
              >
                <div className="flex">
                  {/* <p>{item.priority}</p> */}
                  <div>
                    {/* <p>{item.dueDate}</p> */}
                    <BiDotsHorizontalRounded className="absolute right-0 top-1 m-2" />
                  </div>
                </div>
                <h2 className="font-semibold mt-2">{item.title}</h2>
                <p className="text-sm text-gray-500 py-1">{item.description}</p>
                <p>{item.tags}</p>
                {/* progress bar start */}
                {/* <div className="flex justify-between ">
            <div className="bg-purple-500 h-1.5 rounded-full w-full my-2"></div>
            <p>{`${item.progress}%`}</p>
          </div> */}
                {/* progress bar end */}
                {/* <div className="flex justify-between">
                  <p>{item.assignees}</p>
                  <p>{item.comments}</p>
                  <p>{item.attachments}</p>
                </div> */}
              </div>
            </DraggableTask>
          ))}
        </div>
      </div>
    </DroppableColumn>
  );
}
