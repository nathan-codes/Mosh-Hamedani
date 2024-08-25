import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "917f2e62f7ab4c93ae7336fb47813db1",
  },
});
