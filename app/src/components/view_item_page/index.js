import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
    <div className="flex text-base text-left transform w-full max-w-6xl">
      <div className="w-full relative flex items-center bg-slate-700 px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          {/* IMAGE */}
          <div className="h-full sm:col-span-2 md:col-span-3 lg:col-span-2">
            <div className="rounded-lg bg-slate-500 overflow-hidden h-full flex justify-center">
              <img src={data.image_link} alt={data.title} className="m-auto" />
            </div>
          </div>
          {/* IMAGE */}
          {/* BODY */}
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-extrabold sm:pr-12">
              {data.title[0].toUpperCase() +
                data.title.substring(1, data.title.length)}
            </h2>
            <section aria-labelledby="information-heading" className="mt-3">
              <p className="text-sm font-semibold pb-1">
                Value: {data.item_value} coin{data.item_value === 1 ? "" : "s"}
              </p>
              <p className="text-sm font-semibold pb-1">
                Low Alch: {data.low_alch} coin
                {data.low_alch === 1 ? "" : "s"}
              </p>
              <p className="text-sm font-semibold">
                High Alch: {data.high_alch} coin
                {data.high_alch === 1 ? "" : "s"}
              </p>
              <div className="mt-6">
                <p className="text-sm">{data.description}</p>
              </div>
            </section>
          </div>
          {/* BODY */}
          {/* GRAPH */}
          {/* <div className="col-span-12">
            <ResponsiveContainer height={400}>
              <LineChart data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div> */}
          {/* GRAPH */}
        </div>
      </div>
    </div>
  ) : (
    <div className="">Loading</div>
  );
}
