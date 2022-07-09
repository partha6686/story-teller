import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx global>
        {`
          h2 {
            font-size: 35px;
          }
          h3 {
            font-size: 22px;
          }
        `}
      </style>
      <main className={styles.main}>
        <Image
          className={styles.hero_img}
          src="/hero.jpg"
          width={300}
          height={180}
          alt="story-teller-book"
        />
        <h1 className={styles.title}>Story Teller</h1>
        <div>
          <h2>Popular Stories</h2>
          <h3>Lorem, quaerat itaque ratione. Accusamus?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>Lorem, quaerat itaque ratione. Accusamus?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>Lorem, quaerat itaque ratione. Accusamus?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>Lorem, quaerat itaque ratione. Accusamus?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
