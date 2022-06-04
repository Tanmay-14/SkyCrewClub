import { connectToDatabase } from "../../util/mongodb";

// create a async function

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const jobs = await db
    .collection("jobs")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  res.status(200).json(jobs);
};
