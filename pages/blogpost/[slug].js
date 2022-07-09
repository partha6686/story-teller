import React from "react";
import { useState } from "react";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.json);
  const createMarkup = () => {
    return { __html: blog.content };
  };
  return (
    <div className="container">
      <main className="main">
        <h1>Title: {blog.title}</h1>
        <hr />
        {blog && <div dangerouslySetInnerHTML={createMarkup()} />}
      </main>
    </div>
  );
};

export default Slug;

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
