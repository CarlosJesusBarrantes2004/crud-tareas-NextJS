import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">NotFound</h1>
      <p className="text-sm">
        Página no encontrada.
        <Link
          href={"/"}
          className="text-indigo-700 underline underline-offset-1 text-base font-bold"
        >
          volver
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
