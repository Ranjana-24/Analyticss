import { useDraggable } from "@dnd-kit/react";

export default function DraggableTask({ id, children }) {
  const { ref } = useDraggable({
    id,
  });

  return (
    <div ref={ref} className="bg-white rounded-xl cursor-grab p-2">
      {children}
    </div>
  );
}
