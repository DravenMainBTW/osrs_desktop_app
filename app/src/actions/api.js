import axios from "axios";
import _appConfig from "../_appConfig";

// TEMP FOR TESTING
const server = _appConfig.api_server;

const api = {
  items: {
    // list: () => axios.get(server + "/item"),
    get: (id, daysToView) =>
      axios.get(server + `/item/${id}?days_to_view=${daysToView}`),
    search: (search = "") =>
      axios.get(server + `/item/search?item_name=${search}`),
  },
  hi_scores: {
    get: (id) => axios.get(server + `/hi_scores/${id}`),
    search: (search = "") =>
      axios.get(server + `/hi_scores/search?username=${search}`),
  },
};

export default api;
