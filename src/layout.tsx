import { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-5 px-10 w-screen h-svh overflow-x-hidden overflow-y-scroll">
      <Header />
      <div className="py-20">{children}</div>
      <Footer />
    </div>
  );
};
