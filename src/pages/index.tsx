import { TrendingBlogCard } from "../components/home/TrendingBlogCard";

export function Home() {
  return (
    <>
      <div className="">
        <h1 className="text-[10rem] font-bold font-bebas">BLOGS BY YOU</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col lg:flex-row gap-5 flex-wrap lg:w-[75%] w-full">
            <TrendingBlogCard />
            <TrendingBlogCard />
            <TrendingBlogCard />
          </div>
          <div className=" lg:w-1/4 w-full"></div>
        </div>
      </div>
    </>
  );
}
