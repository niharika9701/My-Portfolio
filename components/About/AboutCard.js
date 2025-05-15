import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Birudugadda Niharika </span>
            from <span className="purple"> Guntur, India.</span>
            <br />
            <br />
            <p>I am currently pursuing a degree in Computer Science Engineering (CSE) at KKR & KSR Institute of Technology and Sciences, Guntur, Andhra Pradesh, expecting to graduate in 2025. I completed my intermediate education at Sri Chaitanya Junior College, Guntur, in 2021, and my SSC at Naveena Vidhya Nikethan High School, Guntur, in 2019.</p>

<p>I am passionate about learning new things and am highly motivated to grow both personally and professionally. My technical skills include proficiency in C, Java, HTML, CSS, SQL. I have worked on academic projects like Pe-He-Ad (a website for pet health and adoption).</p>

<p>I have successfully completed several NPTEL online courses in Java programming and problem-solving through C programming. Also trained and certified as a Junior Software Developer from PMKVY. I am also actively involved in leadership roles, serving as a coordinator for the CSI student chapter and a mentor for JEEVAN KOUSHAL, focusing on improving English communication skills.</p>

<p>I have strong leadership qualities, excellent communication skills, and a proven ability to work both individually and in a team. In my free time, I enjoy traveling, cooking, and gardening​</p>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Niharika</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
