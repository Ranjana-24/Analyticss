import { useNavigate } from "react-router-dom";
import { TbMoodSad } from "react-icons/tb";

export default function ErrorMessage() {
    const navigate = useNavigate();
    return(
        <>
        <div className="flex flex-1 flex-col items-center  ">
        <h1 className="font-lato text-xl font-semibold mt-2">Sorry <TbMoodSad 
        className="inline-block text-xl"/></h1>
        <p className="font-lato text-gray-700 p-1">The page you are looking for does not exist.</p>
        <button onClick={() => navigate("/")}
            className="text-sm font-lato border border-gray-700 px-2 py-0.5 cursor-pointer m-1 rounded">Go to Home</button>
        </div>
        </>
    )
}