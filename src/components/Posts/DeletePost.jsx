import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
export default function DeletePost({
  confirmDlt,
  setConfirmDlt,
  handleDelete,
}) {
  const navigate = useNavigate();
  return (
    <>
      {confirmDlt ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-[90%] max-w-md rounded-2xl bg-white p-8 shadow-xl
        ">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">Delete Post</h2>

              <ImCancelCircle
                className="cursor-pointer  absolute right-2 top-2"
                onClick={() => setConfirmDlt(false)}
              />
            </div>
            <p className="mt-5 text-gray-700 hadow-yellow-500 text-sm">
              Are you sure you want to delete this post?
            </p>

            <div className="mt-6 flex justify-end gap-3 ">
              <button onClick={() => setConfirmDlt(false)}
                 className="border  p-1 text-sm hover:scale-105 rounded cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  handleDelete();
                  setConfirmDlt(false);
                  navigate("/posts/postList");
                }}
                className="border hover:bg-red-500 p-1 cursor-pointer text-sm hover:scale-105 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
