import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { UserLoggedInContext } from "../App";

interface LoginRequestPayload {
  name: string;
  password: string;
}

interface LoginResponseData {
  status: string;
  data: {
    name: string;
    id: string;
  };
}

export function Login() {
  const { setUserLoggedIn } = useContext(UserLoggedInContext);
  const navigate = useNavigate();
  const nameRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();
  const onSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reqBody: LoginRequestPayload = {
      name: nameRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    };
    try {
      const res = await axios.post<any, AxiosResponse<LoginResponseData>, LoginRequestPayload>(
        "http://localhost:4000/api/v1/auth/login",
        reqBody,
        {
          withCredentials: true,
        }
      );
      console.log(res.data.data);
      sessionStorage.setItem("logged-in", "true");
      setUserLoggedIn(sessionStorage.getItem("logged-in") === "true" || false);
      navigate("/");
    } catch (error: AxiosError | any) {
      sessionStorage.removeItem("logged-in");
      console.log(error?.response.data.error.message);
    }
  };
  return (
    <>
      <div className="relative">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] lg:text-center font-bold font-bebas ">
          WELCOME BACK
        </h1>
      </div>
      <div className="p-5 bg-alt2-bg rounded-2xl max-w-[900px] mx-auto">
        <form
          onSubmit={onSumbit}
          id="signup"
          className="p-5 border-[1px] border-[#555555] rounded-lg flex flex-col gap-5"
        >
          <div className="flex flex-col gap-3">
            <label className="block text-[#555555] font-bold text-xl" htmlFor="name-input">
              Name
            </label>
            <input
              ref={nameRef}
              id="name-input"
              form="signup"
              type="text"
              className="hover:outline-none py-2 border-[1px] border-[#555555] rounded-md px-2 text-3xl font-bold text-secodary-bg"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="block text-[#555555] font-bold text-xl" htmlFor="password-input">
              Password
            </label>
            <input
              ref={passwordRef}
              className="hover:outline-none py-2 border-[1px] border-[#555555] rounded-md px-2 text-3xl font-bold text-secodary-bg"
              id="password-input"
              form="signup"
              type="password"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="cursor-pointer py-4 px-10 text-3xl font-bold rounded-lg mt-10 text-alt2-bg font-bebas bg-secodary-bg"
              form="signup"
              type="submit"
              value="LOGIN"
            />
          </div>
        </form>
      </div>
    </>
  );
}
