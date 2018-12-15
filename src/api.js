import axios from "axios";

export default {
  fetchUser : () => axios.get("/user"),
};
