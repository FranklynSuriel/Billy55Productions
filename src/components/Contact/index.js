import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useLocalization } from '../../context/LocalizationContext'

function Contact() {

  const { translate } = useLocalization();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // if (!validateEmail(email) || !fullName || !message) {
    //   setErrorMessage("Email, name, or message is not valid");
    //   return;
    // }

    emailjs
      .sendForm(
        "service_ax1apj9",
        "template_1soogrj",
        form.current,
        "EOnAo4qDst6m2SlBi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setFullName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "fullName") {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (inputValue.trim() === "") {
      setErrorMessage(`${inputType} is required`);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div id="contact_me" className="contact-form">
      <div className="form">
        <h1 className="form_title">{translate("contactTitle")}</h1>
        <p>
        {translate("contactParagraph")}
        </p>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              value={fullName}
              name="fullName"
              onChange={handleInputChange}
              onBlur={handleInputChange}
              type="text"
              placeholder={translate("placeholderName")}
              className="formInput"
              id="inputName"
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleInputChange}
              type="email"
              placeholder={translate("placeholderEmail")}
              className="formInput"
              id="inputEmail"
            />
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleInputChange}
              type="textarea"
              placeholder={translate("placeholderMessage")}
              className="formInput"
              id="inputMessage"
            />
            <button className="flat-button" type="submit">
            {translate("buttonSend")}
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
      <div className="redes">
        <h2>{translate("socialMediaTitle")}</h2>
        <ul>
          <li>
            <a
              target="_black"
              rel="noreferrer"
              href="https://www.instagram.com/b.fotografo55/"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color="red"
                className="icon"
              />
            </a>
          </li>
          <li>
            <a
              target="_black"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCspzzX8DIznZpE8jHT9ZaZA"
            >
              <FontAwesomeIcon icon={faYoutube} color="red" className="icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p>© Billy55Producciones2023</p>
        <p>Generated on Sept 19, 2023 </p>
      </div>
    </div>
  );
}

export default Contact;
