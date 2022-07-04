import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const host = "http://localhost:3000/api/";
  const getBlogs = async () => {
    const response = await fetch(`${host}blogs`, {
      method: "GET",
    });
    const json = await response.json();
    setBlogs(json);
  };
  useEffect(() => {
    getBlogs();
    // fetch(`${host}blogs`, {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => {
    //     console.log(json);
    //     setBlogs(json);
    //   });
  }, []);

  // console.log(blogs);
  return (
    <div className="container">
      <main className={styles.main}>
        {blogs &&
          blogs.map((blog) => {
            return (
              <div key={blog.title}>
                <Link href={"/blogpost/Lorem-quaerat"}>
                  <h3>{blog.title}</h3>
                </Link>
                <p>{blog.content}</p>
              </div>
            );
          })}
      </main>
    </div>
  );
};

export default Blog;
