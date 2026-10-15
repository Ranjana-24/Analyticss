import { useDroppable } from "@dnd-kit/react";

export default function DroppableColumn({ id, children }) {
  const { ref } = useDroppable({
    id,
  });

  return (
    <div ref={ref} className="min-h-40">
      {children}
    </div>
  );
}
