import { Route, Routes, BrowserRouter } from "react-router";
import { Home } from "./pages";
import { Blog } from "./pages/blog";
import { Layout } from "./layout";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import React, { useState } from "react";

interface UserLoggedInContextData {
  userLoggedIn: boolean;
  setUserLoggedIn: (loggedIn: boolean) => void;
}

export const UserLoggedInContext = React.createContext<UserLoggedInContextData>({
  userLoggedIn: false,
  setUserLoggedIn: () => {},
});
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  return (
    <>
      <UserLoggedInContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </UserLoggedInContext.Provider>
    </>
  );
}

export default App;
