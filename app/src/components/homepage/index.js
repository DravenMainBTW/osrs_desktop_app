import React from "react";

export default function Index() {
  return (
    <div className="flex text-base text-left transform w-full">
      <div className="w-full relative flex items-center bg-slate-700 px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          {/* BODY */}
          <div className="col-span-12">
            <h2 className="text-2xl font-extrabold sm:pr-12">Home</h2>
            <div className="mt-6 text-xl">
              <p>This application currently has 2 tools available:</p>
              <p className="mt-6 text-xl">Grand Exchange Item Search</p>
              <p className="text-sm">
                This tool allows you to search for any item on the grand
                exchange and view market data up to the last 300 days. It also
                provides basic information on its low alch, high alch, value and
                if it is a members item or not.
              </p>
              <p className="mt-6 text-xl">Hi-Scores User Search</p>
              <p className="text-sm">
                This tool allows you to search for any account (in the normal
                game) and retrieve their stat information from the Hi-Scores.
                Boss Hi-Scores are to be added.
              </p>
            </div>
          </div>
          {/* BODY */}
        </div>
      </div>
    </div>
  );
}
