import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";
import api from "../../actions/api";

export default function Index() {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [userCheck, setUserCheck] = useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (search) {
            setUserCheck(false);
            api.hi_scores.search(search).then((res) => {
              if (res.exist === true) {
                navigate(`/hi_scores/${search}`, { replace: true });
              } else {
                setUserCheck(true);
              }
            });
          } else {
            setUserCheck(true);
          }
        }}
      >
        <div className="relative border border-slate-200 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-slate-800 focus-within:border-slate-800">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-slate-600 text-xs font-medium"
          >
            Hi-Scores Search
          </label>
          <input
            type="text"
            name="search"
            className="block w-full border-0 p-0 bg-inherit placeholder-slate-200 focus:ring-0 sm:text-sm"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            autoComplete="off"
          />
        </div>
        <button
          type="button"
          className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-slate-900 hover:bg-slate-800 focus:outline-none"
        >
          Check Username
        </button>
      </form>
      {userCheck && (
        <div className="rounded-md bg-red-50 p-4 mt-4 ">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                A user with that name does not exist.
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
