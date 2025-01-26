export function Header() {
  return (
    <>
      <header className="flex w-full items-center gap-10">
        <div className="font-extrabold text-2xl w-1/4">SiMPLE BLOGGING APP</div>

        <ul className="flex flex-col items-end w-3/4 list-none">
          <li className="hover:text-active-text text-lg">
            <a href="">Home</a>
          </li>
          <li className="hover:text-active-text text-lg">
            <a href="">Blogs</a>
          </li>
          <li className="hover:text-active-text text-lg">
            <a href="">Home</a>
          </li>
        </ul>
      </header>
    </>
  );
}
