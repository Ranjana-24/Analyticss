import { MdClose } from "react-icons/md";

export default function ConfirmDltModal({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center
     bg-black/40 
     backdrop-blur-sm">
      <form className="bg-white w-1/2 rounded relative h-[39%]">
        <MdClose
          className="text-red-600 absolute right-2 top-1 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <h1 className="text-2xl font-bold px-6 my-2 font-lato ">Create Task</h1>
        <div className="px-6">
          <div >
            <label for="title"
            className="font-lato ">Title : </label>
            <input
              type="text"
              placeholder="Enter description"
              name="title"
              className="border w-full my-1 px-1"
            />
          </div>
          <div className="my-1">
            <label for="description" className="font-lato">Description :</label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="border w-full my-1 px-1"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={() => setIsOpen(false)}
            className="bg-purple-500 text-white py-2 rounded-md
             hover:bg-purple-600 cursor-pointer absolute right-0 mr-6 px-6" 
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
