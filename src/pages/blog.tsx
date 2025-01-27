type BlogI = {
  id: string;
  title: string;
  discription: string;
  name: string;
  date: string;
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
          <div className="w-full h-full mt-12">
            <div className="p-3">
              <div className="text-[1rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] font-bold font-bebas">
                {blog.title}
              </div>
              <div className="flex">
                <div className="text-2xl">{blog.name}--</div>
                <div className="text-2xl">{blog.date}</div>
              </div>
            </div>

            <div className="text-white flex h-full text-2xl p-20 bg-secodary-bg rounded-2xl relative w-[100%] grow shrink basis-[150px]">
              {blog.discription}
            </div>
          </div>
        ))}
    </div>
  );
}
