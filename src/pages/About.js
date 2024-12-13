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
                Based in Chicago,
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
            first="Transformed iOS App Performance by converting legacy UIKit modules to SwiftUI,
             achieving 22% reduction in app load times and significantly improving memory efficiency. in Agile/Scrum rituals and ceremonies as an effective team member."
            second="Drove Revenue and User Engagement through Google Ad Manager integration, generating 10% increase in mobile revenue and implementing an advanced
             in-house analytics SDK that boosted user engagement metrics by 15%.Utilize and learn proxy tools to analyze Adobe and Firebase network calls."
            third="Optimized Cross-Functional Collaboration by streamlining communication across Android, Backend, Business, 
            and Design teams, reducing feature delivery time by 30% and creating comprehensive documentation.odified, developed and tested analytics functionality for the iOS consumer application."
            fourth="Maintained Exceptional Code Quality with a 95% pass rate in peer code 
            reviews and zero critical production bugs for six consecutive months.Shadow and assist senior software engineers perform End-to-End testing across the iOS application."
            fifth="Demonstrated a consistent approach of solving technical challenges with meaningful, 
            impactful solutions while maintaining a commitment to continuous improvement and innovation."
            date="June 2021 - Present"
            url= "https://www.lowes.com"
            company_logo="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1663953596/Lowes_logo_pms_280_dyodgu.png"
          />
          <hr style={{ borderTop: "3px double #8c8b8b" }} />
          <Experience
            title="Digital Tectonics, LLC "
            subtitle="Software Engineer Contractor"
            first="Rebuilt core app architecture using SwiftUI, optimizing rendering and leveraging modern iOS design patterns."
            second="Engineered a comprehensive component library that standardized our UI toolkit across multiple projects."
            third="Implemented robust unit testing strategy, leveraging dependency injection and protocol-oriented programming to ensure code reliability."
            fourth="Maintained direct client relationships, translating complex technical requirements into clean, effective software solutions"
            date="October 2022 - June 2024"
            company_logo="https://digital-tectonics.com/images/logo.png"
            url="https://digital-tectonics.com/#"
          />
          <hr style={{ borderTop: "3px double #8c8b8b" }} />
          <Experience
            title="CSI-CSTEP program"
            subtitle="College Assistant/Tutor"
            first="Created study plans and lessons for intermediate programming and discrete math for students in need"
            second="Worked with college-level students inside and outside classroom in understanding different computer science and math concepts. "
            third="led and taught an introduction to programming class for high-school students on weekends in CSI. "
            date="October 2019 - August 2020"
            company_logo="https://www.csi.cuny.edu/themes/custom/cuny_csi/logo.svg"
          />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInLeft" animateOnce>
        <h2 style={{ marginTop: "7rem", color: "#1d3557" }}>Education</h2>
        <div className="activities-container">

        <Experience
            title="College of Staten Island - City University of New York"
            subtitle="Software Development Student"
            first="Bachelor of Computer Science - Software Engineering"
            second="Marketing Minor "
            date="January 2021 - June 2021"
            url="https://www.csi.cuny.edu"
            company_logo="https://www.csi.cuny.edu/themes/custom/cuny_csi/logo.svg"
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
            date="January 2021 - June 2021"
            company_logo="https://www.nypl.org/sites/default/files/ttp_logo_2.png"
          />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInLeft" animateOnce>
        <h2 style={{ marginTop: "7rem", color: "#1d3557" }}>Activities</h2>
        <div className="experience-container">
          <Experience
            title="Python Workshop Series"
            subtitle="Introduction to Python and Artificial Intelligence."
            first="Co-hosted a beginner friendly workshop introducing web scrapping
              using Python."
            second="Introduced Glitch and basic python synatx."
            third="Introduced data cleaning techniques using regular expressions to
              improve a data set retrieved from scrapping Twitter."
            fourth="Sponsored by Major League hacking, CUNY2X, and TTP."
            date="March 2021"/>
          <hr style={{ borderTop: "3px double #8c8b8b" }} />
          <Experience
            title="Git into GitHub Workshop"
            subtitle="Beginner's introduction to Git and Github"
            first="Hosted and facilitated a beginner's Git/Github workshop at
              College of Staten Island, computer science department."
            second="Covered basic and critical skills for developers: version
              control, Git, GitHub, terminology and best practices. "
            third="Sponsored by Major League hacking and CUNY2X"
            date="February 2021"
          />
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
