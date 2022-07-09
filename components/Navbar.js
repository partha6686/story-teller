import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.mainnav}>
        <ul>
          <Link href="/" passHref>
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about" passHref>
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a>
              <li>Blog</li>
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
