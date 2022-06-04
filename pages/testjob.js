// fetch api for testjob

import { useState } from "react";

//const [title, setTitle] = useState("");

const Testjob = ({ ninjas }) => {
  fetch("http://localhost:3000/api/jobs")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <>
      <h1>welcome</h1>
    </>
  );
};

export default Testjob;
