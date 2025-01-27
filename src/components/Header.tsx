import { Link } from "react-router";

export function Header() {
  return (
    <>
      <header className="flex w-full items-center gap-10">
        <div className="font-extrabold text-2xl w-1/4">SiMPLE BLOGGING APP</div>

        <ul className="flex flex-col items-end w-3/4 list-none">
          <li className="hover:text-active-text text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-active-text text-lg">
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
