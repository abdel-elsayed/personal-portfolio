import React, { useEffect } from "react";
import "../styling/About.css";
import "../styling/Cards.css";
import "../styling/CertificateCard.css";
import ScrollAnimation from "react-animate-on-scroll";

function Certificates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="cards__wrapper">
      <ScrollAnimation animateIn="bounceInDown" animateOnce>
        <ul className="certificate_cards_items">
          <li>
            <div className="certificate_card">
              <figure
                className="cards__item__pic-wrap"
                data-category="Computer Science Bachelor's Degree"
              >
                <a
                  rel="noopener noreferrer"
                  href="https://www.parchment.com/u/award/38c41f7afbc7d9bfc4a3f15db2665c85"
                  target="_blank"
                >
                  <img
                    className="cards__item__img"
                    alt="Project"
                    src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1649614971/preview-lg_lyrqyg.jpg"
                  />
                </a>
              </figure>
            </div>
          </li>
          <li>
            <div className="certificate_card">
              <figure
                className="cards__item__pic-wrap"
                data-category="Codepath iOS course"
              >
                <a
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/126DNHKOjM0eE8rOcbhBXDAQOE7sxyL_x/view"
                  target="_blank"
                >
                  <img
                    className="cards__item__img"
                    alt="Project"
                    src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1650066992/Screen_Shot_2022-04-15_at_7.56.24_PM_j3zh67.png"
                  />
                </a>
              </figure>
            </div>
          </li>
        </ul>
      </ScrollAnimation>
      <h1>More in progress ...</h1>
    </div>
  );
}

export default Certificates;
