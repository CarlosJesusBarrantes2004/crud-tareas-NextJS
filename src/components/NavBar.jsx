import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-slate-700">
      <nav className="container mx-auto text-sm flex justify-between items-center px-4 py-2">
        <h2 className="font-extrabold text-2xl">
          <Link href={"/"}>Tareas</Link>
        </h2>
        <div>
          <Link href={"/new"} className="text-sm mr-5 font-semibold">
            nueva tarea
          </Link>
          <Link href={"/about"} className="text-sm font-semibold">
            about
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
