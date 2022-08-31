import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Github } from "@emotion-icons/bootstrap/Github";

const projectList = [
  {
    id: 1,
    title: "Almost-FAIM-ous",
    technologies: "mySQL, Sequelize, Express, Socket.io, Bcrypt",
    role: "Frontend Javascript and Backend mySQL/Sequelize, Socket.io, and Javascript.",
    description:
      "Almost-FAIM-ous is a retro chat application that mirrors the essence of the old AOL chatrooms. The app features an authentication-wall that requires users to either login or sign-up to access any of the features. Once authentication has been passed, users will be transported into a chatroom where they can live-chat with other users that are online via WebSockets (Socket.io).",
    links: {
      github: "https://github.com/andypieratt/Almost-FAIM-ous",
      deployed: "https://tranquil-shelf-54052.herokuapp.com/",
    },
    image: "./images/faim-img.svg",
  },
  {
    id: 2,
    title: "Ultimate Fan App",
    role: "Frontend HTML and CSS.",
    technologies: "Bootstrap, Moment.JS, Third-Party API's(Spotify/SeatGeek)",
    description:
      "Ultimate Fan App is an application that allows users to search for their favorite musical artists. Upon query, this app will render the artist's social media channels and a Spotify widget that plays some of their top songs and all upcoming shows/events for the artist using third-party API calls.",
    links: {
      github: "https://github.com/andypieratt/project-1",
      deployed: "https://andypieratt.github.io/project-1/",
    },
    image: "./images/ultimate-fan.svg",
  },
  {
    id: 3,
    title: "DU Event Listeners",
    role: "Frontend React and Backend GraphQL.",
    technologies:
      "React, GraphQL, Socket.io, JWT, React-Bootstrap, Mongoose/MongoDB, Bcrypt, Express, Apollo-Server",
    description:
      "DU Event Listeners was the final project of my DU Bootcamp journey. For this application, our group really wanted to tie-in all that we had learned and create a meaningful app for all of our fellow classmates. The intended purpose of this application is to allow previous, current, and future DU Coding Bootcamp students to have place where they can live-chat with one another, post events for others to attend, a forum section for help or shout-outs, and a resources tab that can be utilized anytime someone needs help remebering or referencing content we have learned in the past.",
    links: {
      github: "https://github.com/andypieratt/DU-Event-Listeners-AP",
      deployed: "https://du-event-listeners.herokuapp.com/",
    },
    image: "./images/event-listeners-img.svg",
  },
  {
    id: 4,
    title: "did-you-get-my-text",
    role: "Frontend and Backend.",
    technologies: "Webpack/PWA, Babel, Workbox, Express, iDB",
    description:
      "This application, which I developed the frontend and backend, is a text-editor, Progressive Web Apllication (PWA). The app resembles the look of the terminal that all us developers hold so dearly. It holds persistence on or offline and allows users to download the application to their machines through the install button.",
    links: {
      github: "https://github.com/andypieratt/did-you-get-my-text",
      deployed: "https://fathomless-sands-33165.herokuapp.com/",
    },
    image: "./images/jate-img.svg",
  },
  {
    id: 5,
    title: "graphing-not-resting",
    role: "Refactoring Frontend and Backend.",
    technologies:
      "React, Bootstrap, GraphQL, Express, Mongoose/MongoDB, Bcrypt, Apollo-Server, JWT, Google Books API",
    description:
      "In this application, I refactored the frontend and backend code from a RESTful API design to using GraphQL. I had to modify and create new routes and schemas that the frontend was able to access through mutations and queries. I also wrapped my entire server.js in the Apollo-Server for Express. Users are able to create a profile or sign-up and then, once logged-in, search for their favorite books and add and remove them from their Saved Books tab as they so choose.",
    links: {
      github: "https://github.com/andypieratt/graphing-not-resting",
      deployed: "https://radiant-tundra-58229.herokuapp.com/",
    },
    image: "./images/googlebooks-img.svg",
  },
  {
    id: 6,
    title: "jesse-eisenberg",
    role: "Backend MongoDB/Mongoose.",
    technologies: "MongoDB/Mongoose and Express",
    description:
      "This application is a backend, noSQL API that was built using Express and MongoDB. Via API calls, there is complete CRUD functionality that allows users to post thoughts and respond with reactions while also being able to add and remove friends from their Friend's List. (The 'Application Link' for this project links to a Google Drive folder that has the two demo-videos of this applications functionality since it is strictly server based.)",
    links: {
      github: "https://github.com/andypieratt/jesse-eisenberg",
      deployed:
        "https://drive.google.com/drive/folders/1qYcpvg4zofR-LkyCMidq3BnK15My5gUB?usp=sharing",
    },
    image: "./images/jesse-eisenberg-img.svg",
  },
];

const styles = {
  margin: {
    margin: "0.2rem",
  },
  img: {
    display: "flex",
    width: "677px",
    height: "300px",
    justifyContent: "center",
  },
  card: {
    margin: "0.5rem",
    backgroundColor: "#344E41",
    color: "#FAEDCD",
  },
  icons: {
    color: "#FAEDCD",
  },
  center: {
    textAlign: "center",
    color: "#FAEDCD",
    marginBottom: "1rem",
  },
};

export default function Projects(props) {
  return (
    <>
      <h2 style={styles.center}>Projects</h2>
      <h4 className="projectHeader" style={styles.center}>
        If you like my work, please follow my GitHub where you can check out
        more of my projects.
      </h4>
      <Row xs={1} md={2} className="g-4">
        {projectList.map((data) => (
          <Col>
            <Card style={styles.card}>
              <Card.Img variant="top" src={data.image} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>Technologies Used: {data.technologies}</Card.Text>
                <Card.Text>Role: {data.role}</Card.Text>
                <Card.Text>{data.description}</Card.Text>
                <a href={data.links.github}>
                  <Github className="icon" style={styles.icons} size={35} />
                </a>
                <br></br>
                <br></br>
                <a href={data.links.deployed}>
                  <button className="button">
                    <span>Application Link!</span>
                  </button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
