"use client";

import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
  const router = useRouter();

  return (
    <div
      className="rounded-sm p-4 bg-slate-600 hover:cursor-pointer hover:bg-slate-500 transition ease-in duration-150"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p className="text-sm font-semibold">{task.description}</p>
      <span className="text-xs font-semibold">
        {new Date(task.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
};

export default TaskCard;
