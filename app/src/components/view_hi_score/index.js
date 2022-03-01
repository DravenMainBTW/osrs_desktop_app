import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";
import api from "../../actions/api";
import Loader from "../common/loader";

export default function Index() {
  const params = useParams();
  const [mountLoading, setMountLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (params.id) {
      api.hi_scores
        .get(params.id)
        .then((res) => {
          setUser(res);
          setMountLoading(false);
        })
        .catch((e) => {
          setMountLoading(false);
        });
    }
  }, [params.id]);

  return mountLoading === false ? (
    <div className="flex text-base text-left transform w-full ">
      <div className="w-full relative flex items-center bg-slate-700 px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          {/* BODY */}
          <div className="col-span-12">
            <h2 className="text-2xl font-extrabold sm:pr-12">
              {params.id
                ? params.id[0].toUpperCase() +
                  params.id.substring(1, params.id.length)
                : "[ERROR]"}{" "}
              Hi-Scores
            </h2>
            <div className="mt-6">
              {Object.keys(user).length > 0 ? (
                <div className="flex flex-col">
                  <div className="mx-auto">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-slate-300 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-slate-300 text-slate-300">
                          <thead className="bg-slate-500">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                              >
                                Skill Name
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                              >
                                Rank
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                              >
                                Level
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                              >
                                XP
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-slate-600 divide-y divide-slate-300">
                            {Object.keys(user).map((item, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {item}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {user[item].rank}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {user[item].level}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {user[item].xp}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-md bg-red-50 p-4 mt-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <XCircleIcon
                        className="h-5 w-5 text-red-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Error fetching user Hi-Scores data, please try
                        refreshing the page.
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* BODY */}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
