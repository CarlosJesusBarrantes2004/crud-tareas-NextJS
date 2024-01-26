"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NewTask = ({ params }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const loadTask = () => {
    fetch(`/api/tasks/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (params.id) loadTask();
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="w-1/3">
      <form onSubmit={onSubmit} className="bg-slate-300 p-4 flex flex-col">
        <input
          id="title"
          type="text"
          value={title}
          className="bg-slate-600 rounded-sm text-sm px-3 py-2 font-semibold outline-none mb-2"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          id="description"
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-600 rounded-sm text-sm px-3 py-2 font-semibold resize-none outline-none mb-5"
        ></textarea>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-blue-600 transition ease-in duration-150"
          >
            Guardar
          </button>
          {params.id && (
            <button
              type="button"
              className="bg-red-500 text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-red-600 transition ease-in duration-150"
              onClick={async () => {
                await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE",
                });
                router.refresh();
                router.push("/");
              }}
            >
              Borrar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewTask;
