import { useNavigate } from "react-router";
import { User } from "./blog/blog";

interface BlogsProps {
  clickId: string | null;
  setClickId: any;
}
export type BlogI = {
  id: string;
  title: string;
  body: string;
  user?: User;
  date: string;
};
export function Blogs({ setClickId, blogs }: BlogsProps & { blogs: BlogI[] }) {
  const Navigate = useNavigate();

  function handleClick(id: string) {
    setClickId(id);
    Navigate(`blog`);
  }

  return (
    <div className="w-full h-full bg-primary mt-12">
      <div className="text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {blogs.map((blog) => (
          <div key={blog.id} className=" min-h-66 bg-secodary-bg text-alt2-bg p-5 rounded-2xl pt-6 ">
            <div className="flex w-full h-full flex-col justify-between p-4 border border-alt2-bg rounded-md">
              <div className="text-4xl font-bold">{blog.title}</div>
              <div className="font-light text-xl">{blog.body.slice(0, 100)}...</div>
              <button
                onClick={() => handleClick(blog.id)}
                className="text-active-text hover:text-red-400 cursor-pointer font-bold"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// function Card(blog: BlogI) {
//   return (

//   );
// }
