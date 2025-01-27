import { useContext, useEffect, useState } from "react";
import { TrendingBlogCard } from "../components/home/TrendingBlogCard";
import { UserLoggedInContext } from "../App";
import { BlogI } from "./blogs";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface BlogsFetchResponse {
  status: string;
  data: BlogI[];
}

export function Home() {
  const { userLoggedIn, setUserLoggedIn } = useContext(UserLoggedInContext);
  const [blogsOwn, setBlogsOwn] = useState<BlogI[]>([]);
  const [blogs, setBlogs] = useState<BlogI[]>([]);

  useEffect(() => {
    const fetchOwnBlogs = async () => {
      try {
        console.log(userLoggedIn);
        setUserLoggedIn(sessionStorage.getItem("logged-in") === "true" || false);
        console.log("SESSION: " + sessionStorage.getItem("logged-in"));
        const url =
          sessionStorage.getItem("logged-in") === "true" || false
            ? "http://localhost:4000/api/v1/search/own"
            : "http://localhost:4000/api/v1/blog";
        const res = await axios.get<any, AxiosResponse<BlogsFetchResponse, any>>(url, {
          withCredentials: true,
        });
        console.log(res.config.baseURL);
        console.log(res.data.data);
        setBlogsOwn(res.data.data);
      } catch (error: any | AxiosError) {
        console.log(error.response.data.error);
      }
    };

    // setUserLoggedIn(sessionStorage.getItem("logged-in") === "true" || false);
    const fetchBlogs = async () => {
      try {
        console.log(userLoggedIn);
        console.log("SESSION: " + sessionStorage.getItem("logged-in"));
        const url = "http://localhost:4000/api/v1/blog";
        const res = await axios.get<any, AxiosResponse<BlogsFetchResponse, any>>(url, {
          withCredentials: true,
        });
        console.log(res.config.baseURL);
        console.log(res.data.data);
        setBlogs(res.data.data);
      } catch (error: any | AxiosError) {
        console.log(error.response.data.error);
      }
    };

    fetchOwnBlogs();
    fetchBlogs();
  }, [userLoggedIn]);
  const hotTopics = [
    {
      title: "Someone should do something about climate",
      author: "Alfred Keneth",
    },
    {
      title: "Cat was furious last night",
      author: "Alfred Keneth",
    },
    {
      title: "My work is lovable",
      author: "Alfred Keneth",
    },
  ];
  const browseTopicsContent = [
    {
      title: "My Morning Routine",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id suscipit quis dolorum, consectetur totam nisi voluptas iste quaerat et tenetur delectus, ducimus perferendis rerum ullam eos qui non doloremque iusto.",
      author: "Alfred Keneth",
    },
    {
      title: "Drinking Coffee",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id suscipit quis dolorum, consectetur totam nisi voluptas iste quaerat et tenetur delectus, ducimus perferendis rerum ullam eos qui non doloremque iusto.",
      author: "Alfred Keneth",
    },
    {
      title: "Find Me A Tune",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id suscipit quis dolorum, consectetur totam nisi voluptas iste quaerat et tenetur delectus, ducimus perferendis rerum ullam eos qui non doloremque iusto.",
      author: "Alfred Keneth",
    },
  ];
  return (
    <>
      <div className=" pb-20 border-b-[1px] border-b-[#777777]">
        <div className="relative">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] text-secodary-bg font-bold font-bebas">
            {userLoggedIn ? "BLOGS BY YOU" : "BLOGS BY EVERONE"}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="flex flex-col lg:flex-row gap-5 flex-wrap lg:w-[80%] w-full">
            {blogsOwn.map((blog) => {
              return <TrendingBlogCard blog={blog} key={blog.id} />;
            })}
          </div>
          <div className=" lg:w-1/4 w-full flex flex-col gap-10">
            <h2 className="text-active-text font-bold text-2xl">HOT TOPICS</h2>
            <div className="flex flex-col gap-10">
              {blogs.map((topic) => {
                return (
                  <div key={topic.id} className=" border-b-[1px] border-s border-l-0 border-[#bbbbbb]">
                    <h3 className="font-bold text-3xl">{topic.title}</h3>
                    <p className="font-light text-[#555555]">{topic.user?.name}</p>
                  </div>
                );
              })}
            </div>
            <a
              className="text-center py-5 w-full border-[1px] border-[#555555] rounded-md font-bold text-xl hover:bg-secodary-bg hover:text-primary-bg transition-all"
              href="/blogs"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>

      <div className="py-5 flex flex-col gap-10">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">BROWSE TOPICS</h2>
          <a href="/blog" className="text-2xl font-bold text-active-text">
            MORE
          </a>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
          {blogs.map((topic) => {
            return (
              <div key={topic.id} className="p-5 bg-secodary-bg rounded-[1.4rem] md:grow md:shrink md:basis-[350px]">
                <div className="flex flex-col gap-3 p-5 border-[1px] border-alt2-bg rounded-xl h-full">
                  <h3 className="font-semibold text-3xl text-alt2-bg">{topic.title}</h3>
                  <p className="font-light text-xl text-alt2-bg">{topic.body}</p>
                  <h5 className="font-bold text-xl text-active-text text-end">{topic.user?.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
