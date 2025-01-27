import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useContext } from "react";
import { BlogI } from "../blogs";
import { UserLoggedInContext } from "../../App";
import { useNavigate } from "react-router";

interface CreateBlogRequestBody {
  title: string;
  body: string;
}

interface CreateBlogResponseBody {
  status: string;
  data: BlogI;
}

export function NewBlog() {
  const navigate = useNavigate();
  const { userLoggedIn, setUserLoggedIn } = useContext(UserLoggedInContext);
  const onSubmit = async (event: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    event.preventDefault();
    setUserLoggedIn(sessionStorage.getItem("logged-in") === "true" || false);
    if (!userLoggedIn) {
      return navigate("/login");
    }
    const reqBody: CreateBlogRequestBody = {
      title: titleRef.current?.value ?? "",
      body: bodyRef.current?.value ?? "",
    };
    try {
      const res = await axios.post<any, AxiosResponse<CreateBlogResponseBody>, CreateBlogRequestBody>(
        "http://localhost:4000/api/v1/blog",
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

  const titleRef = React.createRef<HTMLInputElement>();
  const bodyRef = React.createRef<HTMLInputElement>();

  return (
    <>
      <div className="relative">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] lg:text-center font-bold font-bebas ">
          LET IT OUT
        </h1>
      </div>
      <div className="p-5 bg-alt2-bg rounded-2xl max-w-[900px] mx-auto">
        <form
          onSubmit={onSubmit}
          id="create-blog"
          className="p-5 border-[1px] border-[#555555] rounded-lg flex flex-col gap-5"
        >
          <div className="flex flex-col gap-3">
            <label className="block text-[#555555] font-bold text-xl" htmlFor="title-input">
              Title
            </label>
            <input
              ref={titleRef}
              id="title-input"
              form="create-blog"
              type="text"
              className="hover:outline-none py-2 border-[1px] border-[#555555] rounded-md px-2 text-3xl font-bold text-secodary-bg"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="block text-[#555555] font-bold text-xl" htmlFor="body-input">
              Body
            </label>
            <input
              ref={bodyRef}
              className="hover:outline-none py-2 border-[1px] border-[#555555] rounded-md px-2 text-3xl font-bold text-secodary-bg"
              id="body-input"
              form="create-blog"
              type="text"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="cursor-pointer py-4 px-10 text-3xl font-bold rounded-lg mt-10 text-alt2-bg font-bebas bg-secodary-bg"
              form="create-blog"
              type="submit"
              value="PUBLISH BLOG"
            />
          </div>
        </form>
      </div>
    </>
  );
}
