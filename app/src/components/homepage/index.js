import React from "react";

export default function Index() {
  return (
    <div className="search-content">
      <div className=" relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-800 focus-within:border-gray-800">
        <label
          htmlFor="name"
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          Grand Exchange Search
        </label>
        <input
          type="text"
          name="search"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Search The Grand Exchange"
        />
      </div>
    </div>
  );
}
