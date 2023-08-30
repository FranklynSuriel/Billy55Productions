import React from "react";
import image01 from "./pictures/image01.jpg";
import image02 from "./pictures/image02.jpg";
import image03 from "./pictures/image03.jpg";
import image04 from "./pictures/image04.jpg";
import image05 from "./pictures/image05.jpg";
import image06 from "./pictures/image06.jpg";
import image07 from "./pictures/image07.jpg";
import image08 from "./pictures/image08.jpg";
import image09 from "./pictures/image09.jpg";
import image10 from "./pictures/image10.jpg";
import image11 from "./pictures/image11.jpg";
import image12 from "./pictures/image12.jpg";
import image13 from "./pictures/image13.jpg";
import image14 from "./pictures/image14.jpg";
import image15 from "./pictures/image15.jpg";
import image16 from "./pictures/image16.jpg";
import image17 from "./pictures/image17.jpg";
import image18 from "./pictures/image18.jpg";

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
    maxWidth: "1024px",
    margin: "auto",
    
  },

  img: {
    flexShrink: "0",
    width: "350px",
    minHeight: "250px",
    display: "block",
    // webkitFilter: "grayscale(1)",
    // filter: "grayscale(1)",
    overflow: "hidden",
    position: "relative",
    justifySelf: "start",
    alignSelf: "start",
    // aspectRatio: "0.98 / 1",
    borderRadius: "20px",
    objectFit: "cover"
  },
};

function Portfolio() {
  return (
    <div style={styles.portfolio}>
      <h2 style={styles.title}>Portafolio Cautivador</h2>
      <div style={styles.container}>
        <img src={image01} style={styles.img} alt="Default" />
        <img src={image02} style={styles.img} alt="Default" />
        <img src={image03} style={styles.img} alt="Default" />
        <img src={image04} style={styles.img} alt="Default" />
        <img src={image05} style={styles.img} alt="Default" />
        <img src={image06} style={styles.img} alt="Default" />
        <img src={image07} style={styles.img} alt="Default" />
        <img src={image08} style={styles.img} alt="Default" />
        <img src={image09} style={styles.img} alt="Default" />
        <img src={image10} style={styles.img} alt="Default" />
        <img src={image11} style={styles.img} alt="Default" />
        <img src={image12} style={styles.img} alt="Default" />
        <img src={image13} style={styles.img} alt="Default" />
        <img src={image14} style={styles.img} alt="Default" />
        <img src={image15} style={styles.img} alt="Default" />
        <img src={image16} style={styles.img} alt="Default" />
        <img src={image17} style={styles.img} alt="Default" />
        <img src={image18} style={styles.img} alt="Default" />
      </div>
    </div>
  );
}

export default Portfolio;
