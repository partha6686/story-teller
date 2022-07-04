import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState({});
  const host = "http://localhost:3000/api/";
  const getBlogs = async () => {
    const response = await fetch(`${host}getblog?bt=${slug}`, {
      method: "GET",
    });
    const json = await response.json();
    setBlog(json);
  };
  useEffect(() => {
    getBlogs();
  }, [router.isReady]);
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
