import { MdClose } from "react-icons/md";

export default function ConfirmDltModal({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <form className="bg-white w-1/2 rounded">
        <MdClose
          className="text-red-600 right-1"
          onClick={() => setIsOpen(false)}
        />
        <h1 className="text-2xl font-bold">Create Task</h1>
        <div className="p-4">
          <div>
            <label for="title">Title : </label>
            <input
              type="text"
              placeholder="Enter description"
              name="title"
              className="border"
            />
          </div>
          <div>
            <label for="description">Description :</label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="border"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={() => setIsOpen(false)}
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
