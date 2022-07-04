import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="container">
      <main className="main">
        <h1>Title: {slug}</h1>
        <hr />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere neque
          quo suscipit? Optio minima assumenda aut alias distinctio quia cumque
          illo tempora voluptas? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe dicta error adipisci sed excepturi corporis
          modi! Repudiandae odio esse distinctio nemo vitae possimus nostrum
          corrupti impedit culpa! Dolor, animi tempore!Lorem Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Sunt odit, vel reiciendis
          cupiditate molestiae doloremque non. Qui officia expedita voluptas
          fugiat amet animi labore vero aliquam, suscipit, culpa sapiente error?
        </p>
      </main>
    </div>
  );
};

export default slug;
