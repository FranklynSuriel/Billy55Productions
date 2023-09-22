import React from "react";
import "./index.css";
import { useLocalization } from '../../context/LocalizationContext'

function About() {

  const { translate } = useLocalization();

  return (
    <>
      <div id="about_me" className="about_text">
        <h1 className="about_title">{translate("aboutTitle")}</h1>
        <p className="about_paragraph">
        {translate("aboutParagraph")}
        </p>
      </div>
    </>
  );
}

export default About;
