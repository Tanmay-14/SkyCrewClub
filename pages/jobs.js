import { connectToDatabase } from "../util/mongodb";

export default function Jobs({ jobs }) {
  return (
    <div className="p-3">
      <h1 className="font-bold text-3xl underline">JOBS</h1>
      <ul>
        {jobs.map((job) => (
          <li>
            <h2>{job.companyname}</h2>
            <p>{job.stipen}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const jobs = await db
    .collection("jobs")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      jobs: JSON.parse(JSON.stringify(jobs)),
    },
  };
}
