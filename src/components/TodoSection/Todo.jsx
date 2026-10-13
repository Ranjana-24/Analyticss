// import todoData from "../../data/todoData";
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { FaPlus } from "react-icons/fa6";
// import { BiDotsHorizontalRounded } from "react-icons/bi";

// export default function Todo() {
//     return(
//      <form className="bg-gray-300 w-4/4 flex flex-col gap-4 px-2 ">
//         <div className="flex justify-between mt-2 border-b py-2">
//             <MdKeyboardArrowLeft className="text-2xl cursor-pointer" />
//              <h1 clasName="text-xl font-lato ">To Do</h1>
//              <FaPlus  className="text-sm m-1 cursor-pointer"/>
//         </div>
       
//         {todoData.map((item, index) => (
//             <div key={index} className="bg-white font-lato rounded-xl cursor-pointer p-2" >
            
//                 <div className="flex justify-between">
//                     <p>{item.priority}</p>
//                     <p >{item.dueDate}</p>
//                 </div>
//                 <h2>{item.title}</h2>
//                 <p>{item.description}</p>
//                 <p>{item.tags}</p>
//                 <p>{item.progress}</p>
//                 <div className="flex justify-between">
//                     <p>{item.assignees}</p>
//                     <p>{item.comments}</p>
//                     <p>{item.attachments}</p>
//                 </div>
//                 </div>

//         ))}
//      </form>
//     )
// }