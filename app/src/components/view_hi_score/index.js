import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../actions/api";

export default function Index() {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (params.id) {
      api.hi_scores.get(params.id).then((res) => {
        setUser(res);
      });
    }
  }, [params.id]);

  console.log(user);
  return <div>View Hi Score</div>;
}
