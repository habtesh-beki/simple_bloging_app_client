import { Route, Routes, BrowserRouter } from "react-router";
import { Home } from "./pages";
import { Blog } from "./pages/blog";
import { Layout } from "./layout";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
