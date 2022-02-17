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
      <div className="md:pl-64 flex flex-col min-h-screen bg-slate-600">
        <main className="flex-1 main text-slate-200">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/hi-scores"} element={<HiScores />} />
            <Route path={"/view_item/:id"} element={<ViewItem />} />
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
}
