import get from "./get";
import list from "./list";
import search from "./search";

export default [
  { method: "get", path: "", handler: list },
  { method: "get", path: "/search", handler: search },
  { method: "get", path: "/:id", handler: get },
].map((route) => {
  return { ...route, path: "/item" + route.path };
});
