type BlogI = {
  id: string;
  title: string;
  body: string;
  user?: User;
  date: string;
};

export type User = {
  name: string;
};
type BlogPropI = {
  clickId: string | null;
};
export function Blog({ clickId, blogs }: BlogPropI & { blogs: BlogI[] }) {
  return (
    <div>
      {blogs
        .filter((blog) => blog.id === clickId)
        .map((blog) => (
          <div className="w-full h-full mt-12 flex gap-20 flex-col">
            <div className="p-3">
              <div className="text-[1rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] font-bold font-bebas">
                {blog.title}
              </div>
              <div className="flex text-2xl font-bold text-[#3b3b3b]">
                <div className="">{blog.user?.name} - </div>
                <div className="">{blog.date}</div>
              </div>
            </div>

            <div className="text-white flex h-full text-2xl lg:text-4xl p-20 bg-secodary-bg rounded-2xl relative w-[100%] grow shrink basis-[150px] font-light">
              {blog.body}
            </div>
          </div>
        ))}
    </div>
  );
}
