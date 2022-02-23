import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../actions/api";
import Loader from "../common/loader";

export default function Index() {
  const params = useParams();
  const [mountLoading, setMountLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (params.id) {
      api.hi_scores.get(params.id).then((res) => {
        setUser(res);
        setMountLoading(false);
      });
    }
  }, [params.id]);

  console.log(user);
  return mountLoading === false ? <div>View Hi Score</div> : <Loader />;
}
