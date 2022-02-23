import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  BarChart,
} from "recharts";
import api from "../../actions/api";

export default function Index() {
  const params = useParams();
  const [mountLoading, setMountLoading] = useState(true);
  const [data, setData] = useState({});
  const [daysToView, setDaysToView] = useState(30);

  useEffect(() => {
    api.items.get(params.id, daysToView).then((res) => {
      setData(res);
      setMountLoading(false);
    });
  }, [params.id]);

  return mountLoading === false ? (
    <div className="flex text-base text-left transform w-full ">
      <div className="w-full relative flex items-center bg-slate-700 px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          {/* IMAGE */}
          <div className="h-full col-span-12 md:col-span-5 lg:col-span-3 2xl:col-span-2">
            <div className="rounded-lg bg-slate-500 overflow-hidden h-full flex justify-center">
              <img
                src={data.item_image}
                alt={data.item.title}
                className="m-auto"
              />
            </div>
          </div>
          {/* IMAGE */}
          {/* BODY */}
          <div className="col-span-12 md:col-span-7 lg:col-span-9 2xl:col-span-10">
            <h2 className="text-2xl font-extrabold sm:pr-12">
              {data.item.title[0].toUpperCase() +
                data.item.title.substring(1, data.item.title.length)}
            </h2>
            <section aria-labelledby="information-heading" className="mt-3">
              <p
                className={`text-sm font-semibold ${
                  data.item.members_item === true
                    ? "text-yellow-200"
                    : "text-slate-200"
                } pb-1`}
              >
                {data.item.members_item === true ? "Members" : "Free To Play"}
              </p>
              <p className="text-sm font-semibold pb-1">
                Value: {data.item.item_value} coin
                {data.item.item_value === 1 ? "" : "s"}
              </p>
              <p className="text-sm font-semibold pb-1">
                Low Alch: {data.item.low_alch} coin
                {data.item.low_alch === 1 ? "" : "s"}
              </p>
              <p className="text-sm font-semibold">
                High Alch: {data.item.high_alch} coin
                {data.item.high_alch === 1 ? "" : "s"}
              </p>
              <div className="mt-6">
                <p className="text-sm">{data.item.description}</p>
              </div>
            </section>
          </div>
          {/* BODY */}
          {/* GRAPHS */}
          {/* GRAPH FILTERS */}
          <div className="col-span-0 md:col-span-4 lg:col-span-7 xl:col-span-8 2xl:col-span-9" />
          <div className="col-span-12 md:col-span-8 lg:col-span-5 xl:col-span-4 2xl:col-span-3">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-slate-700"
              >
                Price
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="number"
                  name="daysToView"
                  className="w-full focus:ring-0 focus-within:border-slate-300 bg-inherit placeholder-slate-200 pr-16 sm:text-sm border-slate-300 rounded-md"
                  placeholder="Please Enter Days To View"
                  aria-describedby="days-to-view"
                  value={daysToView}
                  onChange={(e) => {
                    if (e.target.value <= 300) {
                      setDaysToView(e.target.value);
                    }
                  }}
                  autoComplete={"off"}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span
                    className="text-slate-200 sm:text-sm"
                    id="price-currency"
                  >
                    Day(s)
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="w-full mt-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-slate-900 hover:bg-slate-800 focus:outline-none"
                onClick={() => {
                  setData({ ...data, market_data: [] });
                  api.items.get(params.id, daysToView).then((res) => {
                    setData(res);
                  });
                }}
              >
                Fetch Data
              </button>
            </div>
          </div>
          {/* GRAPH FILTERS */}
          <div className="col-span-12">
            <h3 className="text-l font-bold sm:pr-12">
              Daily Item Price Trend
            </h3>
            <ResponsiveContainer height={400}>
              <LineChart data={data.market_data} margin={{ left: 25 }}>
                <XAxis dataKey="Name" stroke="#e2e8f0" />
                <YAxis stroke="#e2e8f0" />
                <Tooltip
                  contentStyle={{
                    background: "rgb(100 116 139)",
                  }}
                />
                <Line
                  dataKey="PriceHigh"
                  type="natural"
                  stroke="rgb(209 213 219)"
                  dot={false}
                  connectNulls
                  strokeWidth={4}
                />
                <Line
                  dataKey="PriceLow"
                  type="natural"
                  stroke="rgb(30 41 59)"
                  dot={false}
                  connectNulls
                  strokeWidth={4}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="col-span-12">
            <h3 className="text-l font-bold sm:pr-12">Units Per Day</h3>
            <ResponsiveContainer height={400}>
              <BarChart data={data.market_data} margin={{ left: 25 }}>
                <XAxis dataKey="Name" stroke="#e2e8f0" />
                <YAxis stroke="#e2e8f0" />
                <Tooltip
                  contentStyle={{
                    background: "rgb(100 116 139)",
                  }}
                  cursor={{
                    fill: "rgb(100 116 139)",
                  }}
                />
                <Bar dataKey="VolumeHigh" fill="rgb(209 213 219)" />
                <Bar dataKey="VolumeLow" fill="rgb(30 41 59)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* GRAPHS */}
        </div>
      </div>
    </div>
  ) : (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}
