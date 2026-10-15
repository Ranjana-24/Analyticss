import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import DraggableTask from "../TodoSection/DraggableTask";
import DroppableColumn from "../TodoSection/DropabbleColumn";
export default function TaskColumn({ title, data }) {
  return (
    <DroppableColumn id={`column-${title}`}>
      <div className="bg-gray-300 w-full flex flex-col gap-4 px-2 ">
        {/* Header */}
        <div className="flex justify-between py-3">
          <MdKeyboardArrowLeft />
          <h1>{title}</h1>
          <FaPlus />
        </div>
        {/* header end */}

        {/* cards start */}
        {data.map((item, index) => (
          <DraggableTask key={`${title}-${item.id}`} id={`${title}-${item.id}`}>
            <div
              key={index}
              className="bg-white font-lato rounded-xl cursor-pointer p-2 relative"
            >
              <div className="flex">
                <p>{item.priority}</p>
                <div>
                  <p>{item.dueDate}</p>
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
              <div className="flex justify-between">
                <p>{item.assignees}</p>
                <p>{item.comments}</p>
                <p>{item.attachments}</p>
              </div>
            </div>
          </DraggableTask>
        ))}
      </div>
    </DroppableColumn>
  );
}
