import React, { useState } from "react";
import {
  FolderIcon,
  HomeIcon,
  CashIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  {
    name: "Search",
    href: "/search",
    icon: SearchIcon,
    current: false,
  },
  {
    name: "Hi-Scores Search",
    href: "/hi-scores",
    icon: FolderIcon,
    current: false,
  },
];

export default function Sidebar() {
  let navigate = useNavigate();
  let [currentSelection, setCurrentSelection] = useState(0);

  return (
    <div className="md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div
          className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 text-white font-medium select-none"
          style={{ WebkitAppRegion: "drag" }}
        >
          <CashIcon className="h-8 w-auto pr-1" />
          OSRS GE App
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item, index) => (
              <p
                key={item.name}
                href={item.href}
                className={classNames(
                  currentSelection === index
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSelection(index);
                  navigate(item.href);
                }}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-gray-300"
                      : "text-gray-400 group-hover:text-gray-300",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </p>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
