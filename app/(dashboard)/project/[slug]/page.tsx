import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  return (
    <main>
      <h1>Project - {params.slug}</h1>

      <Link href="/project/list">Back to Projects</Link>
    </main>
  );
};

export default page;
