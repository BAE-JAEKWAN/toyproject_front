import axios from "axios";

export const getList = async () => {
  const res = await axios.get("/getList");
  return res.data;
};
