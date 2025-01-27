import { useContext } from "react";
import { UserLoggedInContext } from "../App";

export function Footer() {
  const { userLoggedIn } = useContext(UserLoggedInContext);
  const links = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Blogs",
      href: "/blogs",
    },
    {
      text: "Register",
      href: "/signup",
    },
    {
      text: "Login",
      href: "/login",
    },
  ];
  return (
    <>
      <footer className="flex flex-col justify-center w-full items-center gap-5 bg-secodary-bg py-30 px-10 rounded-xl">
        <div className="text-alt-bg font-extrabold font-bebas text-4xl w-1/4 text-center">SiMPLE BLOGGING APP</div>

        <ul className="flex flex-col items-center justify-center w-3/4 list-none">
          {links.map((link) => {
            if (link.text === "Register" && userLoggedIn) return;
            if (link.text === "Login" && userLoggedIn) return;
            return (
              <li key={link.href} className="hover:text-active-text text-2xl font-light text-alt2-bg ">
                <a href={link.href}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
}
