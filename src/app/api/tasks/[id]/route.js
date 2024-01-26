import { Prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const id = Number(params.id);
  const task = await Prisma.task.findUnique({ where: { id } });
  return NextResponse.json(task);
};

export const PUT = async (request, { params }) => {
  const id = Number(params.id);
  const data = await request.json();
  const task = await Prisma.task.update({ where: { id }, data: data });
  return NextResponse.json(task);
};

export const DELETE = async (request, { params }) => {
  try {
    const id = Number(params.id);
    const task = await Prisma.task.delete({ where: { id } });
    return NextResponse.json(task);
  } catch (err) {
    return NextResponse.json(err.message);
  }
};
