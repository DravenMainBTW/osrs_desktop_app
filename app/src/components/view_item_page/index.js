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

  useEffect(() => {
    api.items.get(params.id).then((res) => {
      setData(res.data);
      setMountLoading(false);
    });
  }, [params.id]);

  return mountLoading === false ? (
    <div className="flex text-base text-left transform w-full ">
      <div className="w-full relative flex items-center bg-slate-700 px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          {/* IMAGE */}
          <div className="h-full sm:col-span-2 md:col-span-3 lg:col-span-2">
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
          <div className="sm:col-span-8 lg:col-span-7">
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
          <div className="col-span-12">
            <h3 className="text-l font-bold sm:pr-12">
              Current Item Price Trend (Past{" "}
              {(data.market_data.length * 24) / 24} Days)
            </h3>
            <ResponsiveContainer height={400}>
              <LineChart data={data.market_data}>
                <XAxis dataKey="Name" stroke="#e2e8f0" />
                <YAxis stroke="#e2e8f0" />
                <Tooltip
                  contentStyle={{
                    background: "rgb(100 116 139)",
                  }}
                />
                <Line
                  dataKey="Price"
                  type="natural"
                  stroke="#e2e8f0"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="col-span-12">
            <h3 className="text-l font-bold sm:pr-12">
              Units Per 6 Hours (Past {(data.market_data.length * 24) / 24}{" "}
              Days)
            </h3>
            <ResponsiveContainer height={400}>
              <BarChart data={data.market_data}>
                <XAxis dataKey="Name" stroke="#e2e8f0" />
                <YAxis stroke="#e2e8f0" />
                <Tooltip
                  contentStyle={{
                    background: "rgb(100 116 139)",
                  }}
                />
                <Bar dataKey="Volume" type="natural" fill="#e2e8f0" />
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
