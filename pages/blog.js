import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.json);
  return (
    <div className="container">
      <main className={styles.main}>
        {blogs &&
          blogs.map((blog) => {
            return (
              <div key={blog.slug}>
                <Link href={`/blogpost/${blog.slug}`}>
                  <h3>{blog.title}</h3>
                </Link>
                <p>{blog.content.substr(0, 200)}...</p>
              </div>
            );
          })}
      </main>
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const host = "http://localhost:3000/api/";
  const response = await fetch(`${host}blogs`, {
    method: "GET",
  });
  const json = await response.json();
  return {
    props: { json },
  };
}
