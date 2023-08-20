import React from "react";

const styles = {
  hero: {
    boxSizing: "border-box",
    flexShrink: "0",
    width: "100%",
    height: "800px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 50px 100px 50px",
    backgroundColor: "#5f4842",
    overflow: "hidden",
    position: "relative",
    alignContent: "center",
    flexWrap: "nowrap",
    gap: "50",
    borderRadius: "0px 0px 0px 0px",
  },

  heroText: {
    flexShrink: "0",
    width: "1fr",
    height: "auto" /* 81px */,
    whiteSpace: "pre-wrap",
    wordWrap: "breakWord",
    wordBreak: "breakWord",
    position: "relative",
    fontWeight: "600",
    fontStyle: "normal",
    fontFamily: "Wix Madefor Display",
    color: "#ffffff",
    fontSize: "81px",
    letterSpacing: "0em",
    textTransform: "uppercase",
    lineHeight: "1",
    textAlign: "center",
  },

  menu: {
    flexShrink: "0",
    width: "100%",
    height: "min-content" /* 19px */,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    zIndex: "1",
    position: "relative",
    padding: "0px 0px 0px 0px",
    alignContent: "center",
    flexWrap: "nowrap",
    gap: "20px",
    borderRadius: "0px 0px 0px 0px",
  },

  list: {
    listStyle: 'none',
    flexShrink: '0',
    width: 'auto', /* 50px */
    height: 'auto', /* 19px */
    whiteSpace: 'pre',
    position: 'relative',
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Libre Baskerville',
    color: '#ffffff',
    fontSize: '16px',
    letterSpacing: '0em',
    lineHeight: '1.2',
  },

  anchor: {
    color: '#ffffff',
    textDecoration: 'none',
    
  }
};

function Landing() {
  return (
    <div style={styles.hero}>
      <h2 style={styles.heroText}>BILLY55 PRODUCCIONES</h2>
      <ul style={styles.menu}>
        <li style={styles.list}>
          <a className="nav-link" style={styles.anchor} href="/">Acerca de Nosotros</a>
        </li>
        <li style={styles.list}>
          <a className="nav-link" style={styles.anchor} href="/">Portafolio</a>
        </li>
        <li style={styles.list}>
          <a className="nav-link" style={styles.anchor} href="/">Cotizaciones</a>
        </li>
        <li style={styles.list}>
          <a className="nav-link" style={styles.anchor} href="/">Contactenos</a>
        </li>
      </ul>
    </div>
  );
}

export default Landing;
