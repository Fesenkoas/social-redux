import React from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-row">
          <NavBar />
          <div className=' w-full bg-white bg-opacity-10'>
          {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
