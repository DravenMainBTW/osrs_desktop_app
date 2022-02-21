import get from "./get";
import search from "./search";

export default [
  { method: "get", path: "/search", handler: search },
  { method: "get", path: "/:id", handler: get },
].map((route) => {
  return { ...route, path: "/hi_scores" + route.path };
});
