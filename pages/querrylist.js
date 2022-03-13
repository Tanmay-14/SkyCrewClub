import { connectToDatabase } from "../util/mongodb";

export default function Movies({ jobs }) {
  return (
    <div>
      <h1>Certificate scan</h1>
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
    .find({companyname: "Google"})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      jobs: JSON.parse(JSON.stringify(jobs)),
    },
  };
}
