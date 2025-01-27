import { useContext } from "react";
import { BlogI } from "../../pages/blogs";
import { UserLoggedInContext } from "../../App";

export function TrendingBlogCard({ blog }: { blog: BlogI }) {
  const { userLoggedIn } = useContext(UserLoggedInContext);
  return (
    <>
      <div className="flex flex-col p-5 pt-30 lg:pt-5 justify-end bg-secodary-bg rounded-2xl relative w-[100%] grow shrink basis-[150px]">
        <p className="absolute top-0 right-0 p-5 font-extrabold text-primary-bg">+</p>
        <div className="h-[30%] block"></div>
        <div className="">
          <h2 className=" text-primary-bg text-5xl xl:text-7xl font-bold">{blog.title}</h2>
          <p className="text-[#aaaaaa] font-light text-xl">{userLoggedIn ? "You" : blog.user?.name}</p>
        </div>
      </div>
    </>
  );
}
