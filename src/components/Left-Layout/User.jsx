import user from "../../assets/user.png";
import { HiDotsVertical } from "react-icons/hi";

export default function User() {
  return (
    <>
      <div className="flex m-1.5 border rounded-xl bg-[#6E39CB] text-white relative p-1  gap-3 cursor-pointer ">
        <div className="mt-2">
          <img src={user} alt="user" className="w-8 h-8 ml-1" />
        </div>
        <div className="font-lato">
          <h2>Anita Cruz</h2>
          <h3>anita@commerce.com</h3>
        </div>
        <HiDotsVertical className="absolute right-0 top-1.5 " />
      </div>
    </>
  );
}
