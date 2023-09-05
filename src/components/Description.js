import React from "react";

const styles = {
  text: {
    boxSizing: "border-box",
    flexShrink: "0",
    width: "100%",
    maxWidth: "1200px",
    margin: "auto",
    height: "min-content" /* 320px */,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "100px 100px 100px 100px",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    position: "relative",
    alignContent: "center",
    flexWrap: "nowrap",
    gap: "0",
    borderRadius: "0px 0px 0px 0px",
  },

  title:{
    flexShrink: 0,
    flex: "1 0 0px",
    width: "1px",
    height: "auto", /* 120px */
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    wordBreak: "break-word",
    overflow: "visible",
    position: "relative",
    fontWeight: "800",
    fontStyle: "normal",
    fontFamily: "Wix Madefor Display",
    color: "#260c1a",
    fontSize: "48px",
    letterSpacing: "0em",
    lineHeight: "1.2",
    textAlign: "left",
  },

  paragraph: {
    flexShrink: 0,
    flex: "1 0 0px",
    width: "1px",
    height: "auto", /* 120px */
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    wordBreak: "break-word",
    overflow: "visible",
    position: "relative",
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Libre Baskerville",
    color: "#260c1a",
    fontSize: "20px",
    letterSpacing: "0em",
    lineHeight: "1.5",
    textAlign: "left",
  }
};

function Description() {
  return (
    <>
    <div style = {styles.text}>
      <h2 style={styles.title}>Captura el Momento</h2>
      <p style={styles.paragraph}>
        Bienvenidos a Billy55 Producciones donde impresionantes capturas
        cobran vida por manos expertas. Prepárese para sorprenderse con 
        la artesanía de nuestro experto fotógrafo
      </p>
    </div>
    </>
  );
}

export default Description;
