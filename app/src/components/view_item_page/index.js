import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          {/* IMAGE */}
          <div className="h-full sm:col-span-2 md:col-span-3 lg:col-span-2 ">
            <div className="rounded-lg bg-gray-100 overflow-hidden h-full">
              <img
                src={data.image_link}
                alt={data.title}
                style={{ height: "154.656px" }}
              />
            </div>
          </div>
          {/* IMAGE */}
          {/* BODY */}
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
              {data.title[0].toUpperCase() +
                data.title.substring(1, data.title.length)}
            </h2>
            <section aria-labelledby="information-heading" className="mt-3">
              <p className="text-sm font-semibold text-gray-900 pb-1">
                Value: {data.item_value} coin{data.item_value === 1 ? "" : "s"}
              </p>
              <p className="text-sm font-semibold text-gray-900 pb-1">
                Low Alch: {data.low_alch} coin
                {data.low_alch === 1 ? "" : "s"}
              </p>
              <p className="text-sm font-semibold text-gray-900">
                High Alch: {data.high_alch} coin
                {data.high_alch === 1 ? "" : "s"}
              </p>
              <div className="mt-6">
                <h4 className="sr-only">Description</h4>
                <p className="text-sm text-gray-700">{data.description}</p>
              </div>
            </section>
          </div>
          {/* BODY */}
        </div>
      </div>
    </div>
  ) : (
    <div className="">Loading</div>
  );
}
