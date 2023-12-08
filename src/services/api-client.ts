import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "d30124e7f1e84afab714b5466d3efdd1",
  },
});
