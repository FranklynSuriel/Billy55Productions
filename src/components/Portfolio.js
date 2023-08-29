import React from "react";
import hazel1 from "./pictures/hazel1.JPG";
import hazel2 from "./pictures/hazel2.jpg";
import hazel3 from "./pictures/hazel3.JPG";
import hazel4 from "./pictures/hazel4.jpg";
import hazel5 from "./pictures/hazel5.jpg";
import hazel6 from "./pictures/hazel6.jpg";
import hazel7 from "./pictures/hazel7.jpg";
import hazel8 from "./pictures/hazel8.jpg";

const styles = {
  portfolio: {
    boxSizing: "border-box",
    flexShrink: "0",
    width: "100%",
    // maxWidth: "1200px",
    // margin: "auto",
    height: "min-content" /* 1338px */,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "100px 100px 100px 100px",
    backgroundColor: "#260c1a",
    overflow: "hidden",
    position: "relative",
    alignContent: "center",
    flexWrap: "nowrap",
    gap: "60",
    borderRadius: "0px 0px 0px 0px",
  },

  title: {
    flexShrink: 0,
    flex: "1 0 0px",
    // width: "1px",
    height: "auto" /* 58px */,
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    wordBreak: "break-word",
    overflow: "visible",
    position: "relative",
    fontWeight: "800",
    fontStyle: "normal",
    fontFamily: "Wix Madefor Display",
    color: "#edbfc6",
    fontSize: "48px",
    letterSpacing: "0em",
    lineHeight: "1.2",
    textAlign: "left",
  },

  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "1200px",
    margin: "auto",
  },

  img: {
    flexShrink: "0",
    width: "490px",
    height: "500px",
    display: "block",
    // webkitFilter: "grayscale(1)",
    // filter: "grayscale(1)",
    overflow: "hidden",
    position: "relative",
    justifySelf: "start",
    alignSelf: "start",
    // aspectRatio: "0.98 / 1",
    borderRadius: "40px",
  },
};

function Portfolio() {
  return (
    <div style={styles.portfolio}>
      <h2 style={styles.title}>Portafolio Cautivador</h2>
      <div style={styles.container}>
        <img src={hazel1} style={styles.img} alt="Default" />
        <img src={hazel2} style={styles.img} alt="Default" />
        <img src={hazel3} style={styles.img} alt="Default" />
        <img src={hazel4} style={styles.img} alt="Default" />
        <img src={hazel5} style={styles.img} alt="Default" />
        <img src={hazel6} style={styles.img} alt="Default" />
        <img src={hazel7} style={styles.img} alt="Default" />
        <img src={hazel8} style={styles.img} alt="Default" />
      </div>
    </div>
  );
}

export default Portfolio;
