import React from "react";

function CardItem(props) {
  return (
    <div>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <a href={props.path}>
              {props.vidSrc ? (
                <iframe
                  className="cards__item__img"
                  src={props.vidSrc}
                  title="Enviromania"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                  {" "}
                </iframe>
              ) : (
                <img
                  className="cards__item__img"
                  alt="Project"
                  src={props.src}
                />
              )}
            </a>
          </figure>
          <div className="cards__item__info">
            <p className="cards__item__text">{props.text}</p>
            <a
              className="link-button"
              rel="noopener noreferrer"
              href={props.pathSource}
              target="_blank"
            >
              {props.cardType === "certificates_card_item"
                ? "View Certificate"
                : "Source Code"}
            </a>
            {props.pathLink !== "" ? (
              <a
                className="link-button"
                rel="noopener noreferrer"
                href={props.pathLink}
                target="_blank"
              >
                View live
              </a>
            ) : null}
            {props.pathSand !== "" ? (
              <a
                className="link-button"
                rel="noopener noreferrer"
                href={props.pathSand}
                target="_blank"
              >
                CodeSandBox Link
              </a>
            ) : null}

            <hr style={{ marginTop: "1rem" }}></hr>

            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                listStyleType: "none",
                padding: ".1rem",
                marginTop: "0.2rem",
                color: "white",
              }}
            >
              {props.techs.map((tech) => (
                <li>{tech}</li>
              ))}
              {/* <li
                style={{ fontSize: "30px", float: "left", paddingLeft: "1rem" }}
              >
                <i className={props.tech1}></i>
              </li> */}
            </ul>
            <hr style={{ marginTop: "0.4rem" }}></hr>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "none",
                padding: ".5rem",
                margin: "0.5rem",
                fontWeight: "bold",
              }}
            >
              {props.tags
                ? Array(props.tags.length)
                    .fill()
                    .map((_, i) => (
                      <p style={{ color: "white" }}>#{props.tags[i]}</p>
                    ))
                : null}
            </ul>
          </div>
        </div>
      </li>
    </div>
  );
}
export default CardItem;
