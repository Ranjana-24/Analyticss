// import { useDraggable } from "@dnd-kit/react";

// export default function DraggableTask({ id, children }) {
//   const { ref } = useDraggable({
//     id,
//   });

//   return (
//     <div ref={ref} className="bg-white rounded-xl cursor-grab p-2">
//       {children}
//     </div>
//   );
// }

import { useSortable } from "@dnd-kit/react/sortable";

export default function DraggableTask({ id, children, index, column }) {
  const { ref } = useSortable({
    id,
    index,
    group: column,
    type: "item",
    accept: "item",
  });
  // index task ki curr position btata hai, group batata hai ki task kis column mein hai.
  //type aur accept sortable tasks ke beech interactions define karte hain.

  return (
    <div ref={ref} className="bg-white rounded-xl cursor-grab p-2">
      {children}
    </div>
  );
}
