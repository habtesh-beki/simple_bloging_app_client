import { TrendingBlogCard } from "../components/home/TrendingBlogCard";

export function Home() {
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
                  <div key={topic.title} className=" border-b-[1px] border-s border-l-0 border-[#bbbbbb]">
                    <h3 className="font-bold text-3xl">{topic.title}</h3>
                    <p className="font-light text-[#555555]">{topic.author}</p>
                  </div>
                );
              })}
            </div>
            <a
              className="text-center py-5 w-full border-[1px] border-[#555555] rounded-md font-bold text-xl hover:bg-secodary-bg hover:text-primary-bg transition-all"
              href="/blog"
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
          {browseTopicsContent.map((topic) => {
            return (
              <div className="p-5 bg-secodary-bg rounded-[1.4rem] md:grow md:shrink md:basis-[350px]">
                <div className="flex flex-col gap-3 p-5 border-[1px] border-alt2-bg rounded-xl">
                  <h3 className="font-semibold text-3xl text-alt2-bg">{topic.title}</h3>
                  <p className="font-normal text-xl text-alt2-bg">{topic.content}</p>
                  <h5 className="font-bold text-xl text-active-text text-end">{topic.author}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
