import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props) => {
  const [count, setCount] = useState(10);
  const [blogs, setBlogs] = useState(props.json.data);
  const [len, setLen] = useState(props.json.len);
  const fetchData = async () => {
    const host = "http://localhost:3000/api/";
    const response = await fetch(`${host}blogs?c=${count}`, {
      method: "GET",
    });
    const json = await response.json();
    setBlogs(blogs.concat(json.data));
    setCount(count + 10);
  };
  return (
    <div className="container">
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={blogs.length !== len}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs &&
            blogs.map((blog) => {
              return (
                <div key={blog.slug}>
                  <Link href={`/blogpost/${blog.slug}`}>
                    <h3>{blog.title}</h3>
                  </Link>
                  <p>{blog.metadesc && blog.metadesc.substr(0, 200)}...</p>
                </div>
              );
            })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const host = "http://localhost:3000/api/";
  const response = await fetch(`${host}blogs?c=0`, {
    method: "GET",
  });
  const json = await response.json();
  return {
    props: { json },
  };
}
