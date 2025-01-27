import { TrendingBlogCard } from "../components/home/TrendingBlogCard";

export function Home() {
  const hotTopics = [
    {
      title: "Someone should do something about climate",
      author: "Alfred Keneth",
    },
    {
      title: "Someone should do something about climate",
      author: "Alfred Keneth",
    },
    {
      title: "Someone should do something about climate",
      author: "Alfred Keneth",
    },
  ];
  return (
    <>
      <div className="">
        <div className="relative">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] font-bold font-bebas">
            BLOGS BY YOU
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="flex flex-col lg:flex-row gap-5 flex-wrap lg:w-[80%] w-full">
            <TrendingBlogCard />
            <TrendingBlogCard />
            <TrendingBlogCard />
          </div>
          <div className=" lg:w-1/4 w-full flex flex-col gap-10">
            <h2 className="text-active-text font-bold text-2xl">HOT TOPICS</h2>
            <div className="flex flex-col gap-10">
              {hotTopics.map((topic) => {
                return (
                  <div className=" border-b-[1px] border-s border-l-0 border-[#bbbbbb]">
                    <h3 className="font-bold text-3xl">{topic.title}</h3>
                    <p>{topic.author}</p>
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
    </>
  );
}
