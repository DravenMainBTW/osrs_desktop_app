import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../actions/api";

export default function Index() {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    if (search) {
      api.hi_scores.search(search).then((res) => {
        setItemList(res.data);
      });
    } else {
      setItemList([]);
    }
  }, [search]);

  return (
    <div>
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
          placeholder="Search The Hi-Scores"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <br />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
        <h2 className="text-xl">Previously Queried Users</h2>
        {itemList.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg border border-slate-400 bg-slate-700 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-slate-800"
          >
            <div className="cursor-pointer flex-1 min-w-0">
              <div
                onClick={() =>
                  navigate(`/view_hi_score/${item._id}`, { replace: true })
                }
                className="focus:outline-none"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium ">{item.title}</p>
                <p className="text-sm text-gray-400 truncate">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
