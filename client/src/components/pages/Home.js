import React from "react";
import Card from "react-bootstrap/Card";
// import { NavLink } from "react-router-dom";
// import Image from "react-bootstrap/Image";

const styles = {
  img: {
    marginTop: "1rem",
    justifyContent: "center",
    height: "30rem",
    // marginRight: "5rem",
    // borderRadius: "400px",
  },
  about: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "2rem",
    padding: "2rem",
    backgroundColor: "#344E41",
    color: "#FAEDCD",
  },
  card: {
    display: "flex",
    justifyContent: "center",
  },
  h: {
    marginTop: "0.5rem",
  },
};

export default function Home() {
  return (
    <div>
      <Card className="card">
        <img
          alt="Avatar of Andrew Pieratt"
          style={styles.img}
          className="profilePic"
          // variant="top"
          src="./images/profile-main.svg"
        />
        <Card.Body>
          <h3 style={styles.h}>About Me:</h3>
          <Card.Text>
            Full stack web developer educated at the University of Colorado
            Denver. Certificate from the University of Denver in full stack web
            technologies including JavaScript, Node.js, HTML, and CSS amongst
            many others. My main strength and passion is in backend development,
            using tools like mySQL, Express, MongoDB, and GraphQL. However, I
            also work well on the frontend with programs like React, and enjoy
            the process of connecting the client and server together. I am an
            organized and detail-oriented coder, who has continued to find the
            most effective and efficient ways to write code. I am always willing
            to help out my teammates and look over their code to find any bugs
            that may exist. Throughout the bootcamp, I would consistently work
            with fellow classmates to help them complete their applications
            partially due to my love for coding, but also the desire to see my
            peers succeed. I am an effective communicator and team-player and
            demonstrated that consitently throughout my edcuation, where I kept
            in regular communication with my teammates.
          </Card.Text>
          <Card.Text>
            As a graduate of the DU Full Stack Web Development Certificate
            Program, I have over 100+ hours building and shipping full stack
            applications both individually and collaboratively. My most recent
            project is a DU Coding Bootcamp alumni application that allows
            graduates to stay connected with one another post bootcamp. I built
            the backend of the application using Express, MongoDB/Mongoose,
            Socket.io and GraphQL. I also worked on the frontend side using
            React and Socket.io-Client to develop an instant-messaging component
            that allows users to live chat. I enjoy developing my skills while
            also learning new ones, which means I am currently working on
            another live-chat application built with React, Socket.io, and
            GraphQL, as well as, a blog site that utilizes AWS.
          </Card.Text>
          <Card.Text>Welcome to my portfolio, I hope you enjoy!</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
