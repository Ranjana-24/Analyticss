import TaskColumn from "../components/TodoSection/TaskColumn";

import todoData from "../data/todoData";
import inProgressData from "../data/inProgressData";
import doneData from "../data/doneData";

import { useState } from "react";
export default function TodoPage() {
  const [columns, setColumns] = useState({
    "To Do": todoData,
    "In Progress": inProgressData,
    Done: doneData,
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 bg-purple-50 w-full">
      {/* <TaskColumn title="To Do" data={todoData} />

      <TaskColumn title="In Progress" data={inProgressData} />

      <TaskColumn title="Done" data={doneData} /> */}
      <TaskColumn title="To Do" data={columns["To Do"]} />

      <TaskColumn title="In Progress" data={columns["In Progress"]} />

      <TaskColumn title="Done" data={columns["Done"]} />
    </div>
  );
}
