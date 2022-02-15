import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/common/sidebar";

import Home from "./components/homepage";
import Search from "./components/search";
import ViewItem from "./components/view_item_page";
import HiScores from "./components/hi-scores";

import "./main.css";

export default function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="md:pl-64 flex flex-col">
        <main className="flex-1 main">
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/view_item/:id"} element={<ViewItem />} />
            <Route path={"/hi-scores"} element={<HiScores />} />
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
}
