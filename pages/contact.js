import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const router = useRouter();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const [err, setErr] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const host = "http://localhost:3000/api/";
    const response = await fetch(`${host}contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactInfo),
    });
    const json = await response.json();
    if (response.status == 200) {
      router.push("/");
    } else {
      setErr(json);
    }
  };
  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setErr({});
    setContactInfo({
      name: "",
      email: "",
      phone: "",
      msg: "",
    });
  }, []);

  return (
    <div className="container">
      <main className={styles.main}>
        <h1>Contct us</h1>
        <p className={styles.ERR_container}>
          {err.error && `ERROR: ${err.error}`}
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_ele}>
            <label htmlFor="name" className={styles.form_label}>
              Enter your Name
            </label>
            <br />
            <input
              type="text"
              className={styles.form_control}
              id="name"
              name="name"
              aria-describedby="nameHelp"
              onChange={handleChange}
              value={contactInfo.name}
            />
          </div>

          <div className={styles.form_ele}>
            <label htmlFor="email" className={styles.form_label}>
              Enter your Email
            </label>
            <br />
            <input
              type="email"
              className={styles.form_control}
              id="email"
              name="email"
              aria-describedby="nameHelp"
              onChange={handleChange}
              value={contactInfo.emali}
            />
          </div>

          <div className={styles.form_ele}>
            <label htmlFor="phone" className={styles.form_label}>
              Enter your Phone Number
            </label>
            <br />
            <input
              type="tel"
              className={styles.form_control}
              id="phone"
              name="phone"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={contactInfo.phone}
            />
          </div>

          <div className={styles.form_ele}>
            <label htmlFor="msg" className={styles.form_label}>
              Write your Message
            </label>
            <br />
            <textarea
              className={styles.form_control}
              name="msg"
              id="msg"
              style={{ height: "100px" }}
              onChange={handleChange}
              value={contactInfo.msg}
            ></textarea>
          </div>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
