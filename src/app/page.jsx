import TaskCard from "@/components/TaskCard";
import { Prisma } from "./libs/prisma";

const loadTasks = async () => {
  return await Prisma.task.findMany();
};

export default async function Home() {
  const tasks = await loadTasks();

  return (
    <div className="grid grid-cols-3 gap-5">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
}
