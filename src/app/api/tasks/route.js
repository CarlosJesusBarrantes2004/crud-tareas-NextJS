import { Prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const tasks = await Prisma.task.findMany();
  return NextResponse.json(tasks);
};

export const POST = async (request) => {
  const { title, description } = await request.json();
  const newTask = await Prisma.task.create({ data: { title, description } });
  return NextResponse.json(newTask);
};
