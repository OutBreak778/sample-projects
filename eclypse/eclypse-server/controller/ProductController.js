import { dummyData } from "../data/dummy.js";

export const getProductController = (req, res) => {
  return res.json(dummyData[0]);
};
