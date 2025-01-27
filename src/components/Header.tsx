import { useContext } from "react";
import { UserLoggedInContext } from "../App";
import axios, { AxiosError, AxiosResponse } from "axios";

interface LogoutResponseData {
  status: string;
  data: {
    loggedout: boolean;
  };
}

import { Link } from "react-router";

export function Header() {
  const { userLoggedIn, setUserLoggedIn } = useContext(UserLoggedInContext);
  setUserLoggedIn(sessionStorage.getItem("logged-in") === "true" || false);
  const links = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Blogs",
      href: "/blogs",
    },
  ];
  const buttons = [
    {
      text: "Login",
      href: "/login",
    },
    {
      text: "Register",
      href: "/signup",
    },
  ];

  const onLogOut = async () => {
    try {
      const res = await axios.get<any, AxiosResponse<LogoutResponseData>>(
        "http://localhost:4000/api/v1/auth/logout",
        {
          withCredentials: true,
        }
      );
      console.log(res.data.data);
      sessionStorage.removeItem("logged-in");
      setUserLoggedIn(sessionStorage.getItem("logged-in") === "true" || false);
    } catch (error: AxiosError | any) {
      console.log(error?.response.data.error);
    }
  };
  return (
    <>
      <header className="flex w-full items-center gap-10">
        <div className="font-extrabold text-2xl w-1/4">SiMPLE BLOGGING APP</div>

        <ul className="flex flex-col items-end w-3/4 list-none">
          {links.map((link) => (
            <li className="hover:text-active-text text-lg">
              <Link to={link.href}>{link.text}</Link>
            </li>
          ))}
          {/* <li className="hover:text-active-text text-lg">
            <Link to="/blogs">Blogs</Link>
          </li> */}
        </ul>
        {!userLoggedIn && (
          <ul className="flex flex-wrap justify-end w-1/4 items-end list-none gap-2">
            {buttons.map((button) => {
              return (
                <button
                  key={button.href}
                  className="grow shrink basis-[50px] max-w-[100px] bg-secodary-bg rounded-md p-2 text-alt-bg hover:bg-active-text text-lg font-light"
                >
                  <a href={button.href}>{button.text}</a>
                </button>
              );
            })}
          </ul>
        )}
        {userLoggedIn && (
          <div className="flex flex-wrap justify-end w-1/4 items-end list-none gap-2">
            <button
              onClick={onLogOut}
              className=" max-w-[100px] bg-secodary-bg rounded-md p-2 text-alt-bg hover:bg-active-text text-lg font-light"
            >
              Log Out
            </button>
          </div>
        )}
      </header>
    </>
  );
}
