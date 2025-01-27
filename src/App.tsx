import { Route, Routes, BrowserRouter } from "react-router";
import React, { useEffect, useState } from "react";

import { BlogsFetchResponse, Home } from "./pages";
import { BlogI, Blogs } from "./pages/blogs";
import { Layout } from "./layout";
import { Blog } from "./pages/blog/blog";

import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { NewBlog } from "./pages/blog/new";
import axios, { AxiosError, AxiosResponse } from "axios";

interface UserLoggedInContextData {
  userLoggedIn: boolean;
  setUserLoggedIn: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const UserLoggedInContext = React.createContext<UserLoggedInContextData>({
  userLoggedIn: false,
  setUserLoggedIn: () => {},
});

function App() {
  const [clickId, setClickId] = useState<string | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  const [blogs, setBlogs] = useState<BlogI[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
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

    fetchBlogs();
  }, []);
  return (
    <>
      <UserLoggedInContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/blogs">
                <Route index element={<Blogs setClickId={setClickId} clickId={clickId} blogs={blogs} />} />
                <Route path="blog" element={<Blog clickId={clickId} blogs={blogs} />} />
                <Route path="new" element={<NewBlog />} />
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
