import React, { useEffect } from "react";
import "../styling/About.css";
import "../styling/Cards.css";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";
import Lottie from "react-lottie";
import lottieMouseJson from "../assets/LottieMouse.json";


function About() {
  const lottieMouse = {
    loop: true,
    autoplay: true,
    animationData: lottieMouseJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div
      style={{
        padding: "0 0",
      }}
    >
      <div className="upper-view">
        <div className="main-about">
          <img
            alt="avatar"
            src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1623278819/9585214F-075C-42E0-91FB-6C1C9038EDBE_hiidgp.png"
            className="image"
          />
          <p className="about-text">
            <br />
            <p className="header-text">iOS Mobile Developer</p>
            <p className="second-header-text">
              <strong>
                Based in NYC,
                <br /> I develop software and stuff like that.
              </strong>
            </p>
            <p className="about-paragraph">
              Constantly learning and exploring new skills. Passionate about
              science, creativity, and new technologies, what problems they can
              solve, and how I can use them to build better and scalable
              products.
            </p>
            <br />
            <br />
          </p>
        </div>
        <Link to="Experience" spy={true} className="downArrow bounce">
          <Lottie options={lottieMouse} height={90} width={90} />
        </Link>
      </div>

      <div id="Experience"></div>
      <ScrollAnimation animateIn="bounceInRight" animateOnce>
        <h2 style={{ marginTop: "5rem", color: "#1d3557" }}>Experience</h2>
        <div className="experience-container">
          <Experience
            title="Lowe's Companies, Inc"
            subtitle="iOS Software Development Intern"
            first="Participated in Agile/Scrum rituals and ceremonies as an effective team member"
            second="Utilize and learn proxy tools to analyze Adobe and Firebase network calls"
            third="Modified, developed and tested analytics functionality for the iOS consumer application"
            fourth="Shadow and assist senior software engineers perform End-to-End testing across the iOS application"
            date="June 2021 - Present"
            company_logo="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1663953596/Lowes_logo_pms_280_dyodgu.png"
          />
          <hr style={{ borderTop: "3px double #8c8b8b" }} />
          <Experience
            title="Talent Pipeline Full Stack Bootcamp"
            subtitle="Software Development Student"
            first="Interviewed and selected to participate in a full stack development bootcamp in where topics on use of MongoDB,
       Express, React.js, Node,js, GraphQL were first taught and then applied to delivering a minimum viable product in an agile environment"
            second="Learned in-demand technologies such as Node.js, Express, PostgreSQL and MongoDB in order to interface with a database via API endpoints and
       then rendering images on a custom-built website using React.js"
            third="Applied industry best practices for design, implementation, and deployment of architectural patterns such as Model-View-Controller,
       and version control with Git/GitHub"
            date="January 2021 - Present"
            company_logo="https://www.nypl.org/sites/default/files/ttp_logo_2.png"
          />
          <hr style={{ borderTop: "3px double #8c8b8b" }} />
          <Experience
            title="CSI-CSTEP program"
            subtitle="College Assistant/Tutor"
            first="Created study plans and lessons for intermediate programming and discrete math for students in need"
            second="Worked with college-level students inside and outside classroom in understanding different computer science and math concepts. "
            third="led and taught an introduction to programming class for high-school students on weekends in CSI. "
            date="October 2019 - August 2020"
            company_logo="http://www1.cuny.edu/sites/asap/wp-content/uploads/sites/8/2020/02/csi_logo.jpg"
          />
          {/* <hr style={{ borderTop: "3px double #8c8b8b" }} />
          <Experience
            title="Payless Shoe-source"
            subtitle="Assistant Manager, Key Holder"
            first="Promoted in the first year from a sales associate to a store assistant manager for showing exceptional
      performance and leadership skills through fast-paced environment"
            second="Managed and coordinated all retail store operations"
            third="Motivated sales employees to improve morale, performance and sales revenue."
            date="June 2016 - August 2019"
            company_logo="https://upload.wikimedia.org/wikipedia/commons/e/e9/Payless_Logo.png"
          /> */}
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInLeft" animateOnce>
        <h2 style={{ marginTop: "7rem", color: "#1d3557" }}>Activities</h2>
        <div className="activities-container">
          <ul className="experience-item">
            <li
              style={{
                marginBottom: "0rem",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              <strong>Python Workshop Series</strong>
            </li>
            <p
              style={{
                marginTop: "0.2rem",
                textAlign: "center",
                textDecoration: "underline",
                color: "#457B9D",
              }}
            >
              Introduction to Python and Artificial Intelligence.
            </p>
            <li>
              - Co-hosted a beginner friendly workshop introducing web scrapping
              using Python.{" "}
            </li>
            <li>- Introduced Glitch and basic python synatx.</li>
            <li>
              - Introduced data cleaning techniques using regular expressions to
              improve a data set retrieved from scrapping Twitter.
            </li>
            <li>- Sponsored by Major League hacking, CUNY2X, and TTP.</li>

            <li
              style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#be837d",
              }}
            >
              March 2021
            </li>
          </ul>
          <hr style={{ borderTop: "3px double #8c8b8b" }} />
          <ul className="experience-item">
            <li
              style={{
                marginBottom: "0rem",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              <strong>Git into GitHub Workshop</strong>
            </li>
            <p
              style={{
                marginTop: "0.2rem",
                textAlign: "center",
                textDecoration: "underline",
                color: "#457B9D",
              }}
            >
              Beginner's introduction to Git and Github
            </p>
            <li>
              - Hosted and facilitated a beginner's Git/Github workshop at
              College of Staten Island, computer science department.{" "}
            </li>
            <li>
              - Covered basic and critical skills for developers: version
              control, Git, GitHub, terminology and best practices
            </li>
            <li>- Sponsored by Major League hacking and CUNY2X</li>

            <li
              style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#be837d",
              }}
            >
              February 2021
            </li>
          </ul>
        </div>
      </ScrollAnimation>

      <div style={{ textAlign: "center", marginBottom: "6rem" }}>
        <ScrollAnimation animateIn="bounceInUp" animateOnce>
          <div className="cards__container skills">
            <Skills />
          </div>
        </ScrollAnimation>
        <button
          className="bounce button-up"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <i className="fas fa-sort-up fa-5x"></i>
        </button>
      </div>
    </div>
  );
}

export default About;
