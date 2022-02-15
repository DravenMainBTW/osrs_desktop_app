import axios from "axios";
import _appConfig from "../_appConfig";

// TEMP FOR TESTING
const server = _appConfig.api_server;

const api = {
  items: {
    list: () => axios.get(server + "/item"),
    get: (id) => axios.get(server + `/item/${id}`),
    search: (search = "") =>
      axios.get(server + `/item/search?item_name=${search}`),
  },
  hi_scores: {},
};

export default api;
