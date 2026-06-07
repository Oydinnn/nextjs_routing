"use client";

import { useParams } from "next/navigation";

export default function Student() {
  const {id} = useParams();
  return (
    <div>
      <h1>
        Student id:  {id}
      </h1>
    </div>
  );
}