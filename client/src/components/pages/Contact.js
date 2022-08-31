import React, { useState } from "react";
import { createMessage } from "../../utils/API";
import { Github } from "@emotion-icons/bootstrap/Github";
import { Gmail } from "@emotion-icons/simple-icons/Gmail";
import { Linkedin } from "@emotion-icons/bootstrap/Linkedin";

const styles = {
  format: {
    display: "flex",
    flexDirection: "column",
    margin: "5rem",
  },
  center: {
    marginTop: "5rem",
    textAlign: "center",
    color: "#FAEDCD",
  },
  headers: {
    textAlign: "center",
    color: "#FAEDCD",
    marginTop: "2rem",
  },
  backgroundText: {
    backgroundColor: "#FAEDCD",
  },
  button: {
    backgroundColor: "#344E41",
    color: "#FAEDCD",
    borderRadius: "7px",
  },
  icon: {
    color: "#FAEDCD",
  },
  margin: {
    marginBottom: "2rem",
  },
};

export default function Contact() {
  const [contactFormData, setContactFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { ...contactFormData };
      console.log(data);

      setContactFormData({
        userName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }

    setContactFormData({ userName: "", email: "", message: "" });
  };

  return (
    <div>
      <section>
        <h2 style={styles.center}>Contact</h2>
        <h4 style={styles.headers}>
          Please feel free to contact or connect with me through any of the
          links below. Thank you!
        </h4>
        <section style={styles.center}>
          <a href="mailto:pieratt.aw@gmail.com">
            <Gmail className="icon" style={styles.icon} size={100} />
          </a>
        </section>
        <section style={styles.center}>
          <a
            href="https://github.com/andypieratt"
            target="blank"
            rel="noopener noreferrer"
          >
            <Github className="icon" style={styles.icon} size={100} />
          </a>
        </section>
        <section style={styles.center}>
          <a
            href="https://www.linkedin.com/in/andrew-pieratt/"
            target="blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="icon" style={styles.icon} size={100} />
          </a>
        </section>
        <br></br>
        <br></br>
        {/* <form onSubmit={handleFormSubmit} style={styles.format}>
          <label>Name:</label>
          <input
            style={styles.backgroundText}
            value={contactFormData.userName}
            onChange={handleInputChange}
            type="text"
            name="userName"
            placeholder="Firstname Lastname"
          ></input>
          <br></br>
          <label>Email:</label>
          <input
            style={styles.backgroundText}
            value={contactFormData.email}
            onChange={handleInputChange}
            type="text"
            name="email"
            placeholder="johndoe@gmail.com"
          ></input>
          <br></br>
          <label>Message:</label>
          <textarea
            style={styles.backgroundText}
            value={contactFormData.message}
            onChange={handleInputChange}
            type="textarea"
            name="message"
            placeholder="Message..."
          ></textarea>
          <br></br>
          <br></br>
          <button style={styles.button} type="submit">
            Submit
          </button>
        </form> */}
      </section>
    </div>
  );
}
