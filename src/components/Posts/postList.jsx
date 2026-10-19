import { FiLoader } from "react-icons/fi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoCreate } from "react-icons/io5";


export default function postList({ posts }) {
  const navigate = useNavigate();

  if (posts === null) {
    return (
      <p className="p-6">
        <FiLoader className="animate-spin text-2xl text-center"/>
      </p>
    );
  }
  return (
    <div className="flex-1 bg-gray-50 p-4">
      <div className="flex justify-between mb-4 ">
        <h1 className="text-3xl font-bold ">All Posts </h1>
        <button onClick={() => navigate("/posts/create")}
           className="text-xl cursor-pointer text-gray-700
           ">
          <IoCreate/>
        </button>
      </div>
      <div className="font-lato">
        {posts.map((post, index) => (
          <div key={index} classsName="font-lato flex flex-row  ">
            <div className="flex border rounded-2xl gap-2  mb-2 p-4 justify-between cursor-pointer
            hover:  hover:scale-101 hover:bg-gray-100 hover:font-semibold">
              <h2 className="text-md ">{post.title}</h2>
              <button
                onClick={() => navigate(`/posts/${post.id}`)}
                className="cursor-pointer"
              >
                <FaArrowAltCircleRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
