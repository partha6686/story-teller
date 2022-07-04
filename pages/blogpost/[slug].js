import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const slug = (props) => {
  const [blog, setBlog] = useState(props.json);
  return (
    <div className="container">
      <main className="main">
        <h1>Title: {blog.title}</h1>
        <hr />
        <p>{blog.content}</p>
      </main>
    </div>
  );
};

export default slug;

export async function getServerSideProps(context) {
  //const router = useRouter();
  const { slug } = context.query;
  const host = "http://localhost:3000/api/";
  const response = await fetch(`${host}getblog?bt=${slug}`, {
    method: "GET",
  });
  const json = await response.json();
  return {
    props: { json }, // will be passed to the page component as props
  };
}
