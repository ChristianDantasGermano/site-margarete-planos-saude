export const rotas = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Blog",
    to: "/blog",
  },
];

export function Menu() {
  return (
    <nav className="top-0 left-0 bottom-0 w-96 bg-slate-800 pt-12">
      <ul className="flex flex-col gap-3 p-4">
        <li className="block text-3xl p-3 list-none text-white">Portfolio</li>
        <li className="block text-3xl p-3 list-none text-white">About</li>
        <li className="block text-3xl p-3 list-none text-white">Contact</li>
        <li className="block text-3xl p-3 list-none text-white">Search</li>
      </ul>
    </nav>
  );
}
