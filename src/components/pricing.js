import React from "react";

const styles = {
  pricing: {
    boxSizing: "border-box",
    // flexShrink: "0",
    width: "100%",
    height: "min-content" /* 603px */,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // alignItems: "center",
    padding: "100px 100px 100px 100px",
    backgroundColor: "#260c1a",
    // overflow: "visible",
    // position: "relative",
    // alignContent: "center",
    // flexWrap: "nowrap",
    // gap: "0",
    borderRadius: "0px 0px 0px 0px",
  },

  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "auto",
    gap:"20px"
  },

  card: {
    boxSizing: "border-box",
    flexShrink: "0",
    // flex: "1 0 0px",
    // width: "204px",
    height: "403px" /* 403px */,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    padding: "40px 40px 40px 40px",
    boxShadow: "0px 10px 20px -20px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#391227",
    // overflow: "hidden",
    // position: "relative",
    alignContent: "flex-start",
    flexWrap: "nowrap",
    borderRadius: "30px",
  },

  cardTitle: {
    flexShrink: "0",
    width: "auto" /* 37px */,
    height: "auto" /* 21px */,
    whiteSpace: "pre",
    position: "relative",
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Libre Baskerville",
    color: "#edbfc6",
    fontSize: "14px",
    letterSpacing: "0em",
    lineHeight: "1.5",
    textAlign: "left",
  },

  price: {
    flexShrink: "0",
    width: "auto" /* 115px */,
    height: "48px",
    margin: "14px 0",
    whiteSpace: "pre",
    position: "relative",
    fontWeight: "800",
    fontStyle: "normal",
    fontFamily: `"Libre Baskerville", "Libre Baskerville Placeholder", serif`,
    color: "#ffffff",
    fontSize: "40px",
    letterSpacing: "0em",
    lineHeight: "1",
    textAlign: "left",
  },

  planDetail: {
    boxSizing: "border-box",
    flexShrink: "0",
    // width: '1px',
    height: "154px" /* 154px */,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "visible",
    flex: "1 0 0px",
    position: "relative",
    alignContent: "center",
    flexWrap: "nowrap",
    gap: "10",
    borderRadius: "0px 0px 0px 0px",
  },

  plans: {
    flexShrink: 0,
    flex: "1 0 0px",
    width: "150px",
    height: "auto" /* 21px */,
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    wordBreak: "break-word",
    position: "relative",
    fontWeight: 400,
    fontStyle: "normal",
    fontFamily: `"Libre Baskerville", "Libre Baskerville Placeholder", serif`,
    color: "#edbfc6",
    fontSize: "14px",
    letterSpacing: "0em",
    lineHeight: 1.5,
    textAlign: "left",
  },
};

function Pricing() {
  return (
    <div style={styles.pricing}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}>Basico</h4>
          <h2 style={styles.price}> 99.99</h2>
          <div style={styles.planDetail}>
              <p style={styles.plans}>✓ 7 Fotos</p>
              <p style={styles.plans}>✓ Galleria de Fotos </p>
              <p style={styles.plans}>✓ 1 Locacion</p>
              <p style={styles.plans}>✓ Edicion Profesional</p>
          </div>
        </div>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}>Avanzado</h4>
          <h2 style={styles.price}> 199.99</h2>
            <div style={styles.planDetail}>
              <p style={styles.plans}>✓ 15 Photos</p>
              <p style={styles.plans}>✓ Album</p>
              <p style={styles.plans}>✓ 2 Locaciones</p>
              <p style={styles.plans}>✓ Edicion Profesional</p>
          </div>
        </div>
        <div style={styles.card}>
          <h4 style={styles.cardTitle}>Premium</h4>
          <h2 style={styles.price}> 299.99</h2>
            <div style={styles.planDetail}>
              <p style={styles.plans}>✓ 25 Fotos</p>
              <p style={styles.plans}>✓ fotos con Drones</p>
              <p style={styles.plans}>✓ diferentes Outfit</p>
              <p style={styles.plans}>✓ Montaje de video</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
