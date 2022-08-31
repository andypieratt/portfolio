import React from "react";
import { Link } from "react-router-dom";

const styles = {
  alignCenter: {
    textAlign: "center",
    color: "#FAEDCD",
  },
  section: {
    marginLeft: "2rem",
    color: "#FAEDCD",
  },
  padding: {
    paddingRight: "3rem",
  },
  download: {
    marginLeft: "2rem",
    color: "#FAEDCD",
    marginTop: "2rem",
    paddingBottom: "5rem",
    fontSize: "18px",
  },
  image: {
    width: "100px",
    height: "100px",
  },
};

export default function Resume() {
  return (
    <div className="resume">
      <Link
        style={styles.download}
        to="/files/pieratt-andrew-resume.pdf"
        target="_blank"
        download
      >
        * Download Resume *
      </Link>
      <br></br>
      <br></br>
      <h3 style={styles.alignCenter}>Summary</h3>
      <section style={styles.section}>
        <br></br>
        <p style={styles.padding}>
          Full stack web developer educated at the University of Colorado
          Denver. Certificate from the University of Denver in full stack web
          technologies including JavaScript, Node.js, HTML, and CSS amongst many
          others. Organized and detail-oriented coder, that continuously finds
          the most effective and efficient ways to write code. Effective
          communicator and team-player who demonstrated that throughout the
          bootcamp experience, by keeping in regular communication with
          teammates. Passionate about user experiences, and determined to build
          dynamic and engaging applications for users and clients.
        </p>
      </section>
      <h3 style={styles.alignCenter}>Education</h3>
      <section style={styles.section}>
        <br></br>
        <h4>University of Denver (2022)</h4>
        <h5>
          Certificate in Full-Stack Coding and Web Development from the
          University of Denver
        </h5>
        <a
          href="https://www.credly.com/badges/3f48f3b3-ef3b-4235-aab0-4f7330af9534/public_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={styles.image}
            alt="badge from the University of Denver"
            src="./images/full-stack-coding-boot-camp.png"
          ></img>
        </a>
      </section>
      <br></br>
      <section style={styles.section}>
        <h4>University of Colorado, Denver (2017-2021)</h4>
        <h5>Bachelor of Science in Music Business</h5>
        <p>
          Relevant Coursework: Marketing, Operations/Venue Management and
          Promotion, Entrepreneurship, Business in the Digital Age, and Music
          Law.
        </p>
        <p>Awards and Honors:</p>
        <ul>
          <li>Graduated Cum Laude.</li>
          <li>Member of the National Society for Collegiate Scholars.</li>
        </ul>
      </section>
      <br></br>
      <h3 style={styles.alignCenter}>Technical Skills</h3>
      <section style={styles.section}>
        <br></br>
        <h5>Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL</h5>
        <h5>Applications: GitHub, MongoDB, MySQL</h5>
        <h5>
          Tools: Express, GraphQL, React, Node, Handlebars, JQuery, Bootstrap,
          WebPack, SnowPack, Babel, Socket.io, Jest
        </h5>
        <h5>Currently Learning: TypeScript, Golang, AWS</h5>
      </section>
      <br></br>
      <br></br>
      <h3 style={styles.alignCenter}>Experience</h3>
      <section style={styles.section}>
        <br></br>
        <h4>Bertram Capital Finance (2019-2022)</h4>
        <h5>Floor Manager</h5>
        <ul>
          <li>
            Increased sales by 35% by demonstrating ability to successfully lead
            and manage others in a high volume, high energy startup business.
          </li>
          <li>Operated in a high volume and high energy start-up business.</li>
          <li>
            Proved the ability to understand products and successfully complete
            sales.
          </li>
          <li>
            Initial Front Desk hire but received two promotions in the span of
            two years (Sales Associate, Floor Manager) due to persistence and
            willingness to fill specific roles when needed.
          </li>
          <li>Verified deposits and large quantity cash-handling.</li>
          <li>
            Deescalated tensions and resolved conflicts between employees and
            customers.
          </li>
        </ul>
      </section>
      <section style={styles.section}>
        <br></br>
        <h4>Outlaw Vintage Co. (2018-Present)</h4>
        <h5>Vintage Curator and Manager</h5>
        <ul>
          <li>Creator and manager of own vintage store and archive.</li>
          <li>
            Proficient in photography, social media curation, and
            inventory/website upkeep.
          </li>
          <li>
            Knowledgeable in curating, sourcing, and merchandising vintage and
            sustainable clothing.
          </li>
        </ul>
        <br></br>
      </section>
      <h3 style={styles.alignCenter}>Skills and Interests</h3>
      <section style={styles.section}>
        <br></br>
        <h5>Skills:</h5>
        <li>
          Outgoing, dedicated, persistent, hard-working, and a team player.
        </li>
        <br></br>
        <h5>Interests:</h5>
        <li>
          Heavy Metal/Rock drummer, counter-culture enthusiast, and collector
          and re-seller of vintage clothing and furniture.
        </li>
      </section>
    </div>
  );
}
