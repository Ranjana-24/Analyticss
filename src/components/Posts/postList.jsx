import { FiLoader } from "react-icons/fi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function postList({ posts }) {
  const navigate = useNavigate();

  if (posts === null) {
    return (
      <p className="p-6">
        <FiLoader />
      </p>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-bold ">Posts List</h1>
      <button
        className="border p-1 bg-purple-200 font-lato rounded-xl my-2"
        onClick={() => navigate("/posts/create")}
      >
        Create Post
      </button>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <button onClick={() => navigate(`/posts/${post.id}`)}>
            Read more
            <FaArrowAltCircleRight />
          </button>
        </div>
      ))}
    </div>
  );
}
