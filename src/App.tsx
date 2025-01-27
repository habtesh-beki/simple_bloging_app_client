import { Route, Routes, BrowserRouter } from "react-router";
import React, { useState } from "react";

import { Home } from "./pages";
import { Blogs } from "./pages/blogs";
import { Layout } from "./layout";
import { Blog } from "./pages/blog";

import { Signup } from "./pages/signup";
import { Login } from "./pages/login";

const blogs = [
  {
    id: "klsjf",
    title: "Lorem ipsum dolor sit amet consectetur ",
    discription:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium veniam delectus, est excepturi impedit repellendus vel doloribus molestias aliquam magni voluptas maiores alias autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quidem quisquam doloremque repellendus, unde minima deleniti accusamus velit eos laboriosam sint tempora iusto cupiditate aut sed similique ipsam ipsum? Optio odit esse, eligendi nihil, deserunt vel unde delectus cum ut, labore est odio provident voluptatibus. Quis reprehenderit deleniti voluptate quam.",
    name: "Haileab",
    date: "12/04/2007",
  },
  {
    id: "sw3kjl23",
    title: "Lorem ipsum dolor sit amet consectetur",
    discription:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium veniam delectus, est excepturi impedit repellendus vel doloribus molestias aliquam magni voluptas maiores alias autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quidem quisquam doloremque repellendus, unde minima deleniti accusamus velit eos laboriosam sint tempora iusto cupiditate aut sed similique ipsam ipsum? Optio odit esse, eligendi nihil, deserunt vel unde delectus cum ut, labore est odio provident voluptatibus. Quis reprehenderit deleniti voluptate quam.",
    name: "Haileab",
    date: "12/04/2007",
  },
  {
    id: "756lkj",
    title: "Lorem ipsum dolor sit amet consectetur ",
    discription:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium veniam delectus, est excepturi impedit repellendus vel doloribus molestias aliquam magni voluptas maiores alias autem!",
    name: "Haileab",
    date: "12/04/2007",
  },
  {
    id: "jlksfjelwr3243",
    title: "Lorem ipsum dolor sit amet consectetur",
    discription:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium veniam delectus, est excepturi impedit repellendus vel doloribus molestias aliquam magni voluptas maiores alias autem!",
    name: "Haileab",
    date: "12/04/2007",
  },
  {
    id: "2432lkjlk",
    title: "Lorem ipsum dolor sit amet consectetur",
    discription:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium veniam delectus, est excepturi impedit repellendus vel doloribus molestias aliquam magni voluptas maiores alias autem!",
    name: "Haileab",
    date: "12/04/2007",
  },
  {
    id: "rpowerl1212",
    title: "Lorem ipsum dolor sit amet consectetur",
    discription:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium veniam delectus, est excepturi impedit repellendus vel doloribus molestias aliquam magni voluptas maiores alias autem!",
    name: "Haileab",
    date: "12/04/2007",
  },
];

interface UserLoggedInContextData {
  userLoggedIn: boolean;
  setUserLoggedIn: (loggedIn: boolean) => void;
}

export const UserLoggedInContext = React.createContext<UserLoggedInContextData>(
  {
    userLoggedIn: false,
    setUserLoggedIn: () => {},
  }
);

function App() {
  const [clickId, setClickId] = useState<string | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  return (
    <>
      <UserLoggedInContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/blogs">
                <Route
                  index
                  element={
                    <Blogs
                      setClickId={setClickId}
                      clickId={clickId}
                      blogs={blogs}
                    />
                  }
                />
                <Route
                  path="blog"
                  element={<Blog clickId={clickId} blogs={blogs} />}
                />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </UserLoggedInContext.Provider>
    </>
  );
}

export default App;
