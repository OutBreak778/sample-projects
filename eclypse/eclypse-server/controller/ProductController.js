import { dummyData } from "../data/dummy.js";

export const getProductController = (req, res) => {
  const data = dummyData[0]
  if(!data) {
    return res.json({"Message": "Something went wrong!", status: 401})
  }
  return res.json(data);
};
