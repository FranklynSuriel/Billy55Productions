import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa500px, faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Contact() {
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
        "service_bhy996m",
        "template_vxsdzf9",
        form.current,
        "6Pa3MRGA0UbxP5RKe"
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
    <div className="contact-form">
      <h1 className="title">Contacto</h1>
      <p>
        ¿Listo para darle vida a tus recuerdos? No dude en comunicarse con
        nosotros y unirse a la experiencia Billy55Producciones.
      </p>
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form"
        >
          <input
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            onBlur={handleInputChange}
            type="text"
            placeholder="Nombre"
            className="formInput"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleInputChange}
            type="email"
            placeholder="Correo Electronico"
            className="formInput"
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleInputChange}
            type="textarea"
            placeholder="Mensaje"
            className="formInput"
          />
          <button className="flat-button" type="submit">
            Enviar
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
      <div >
        <ul>
          <li>
            <a 
            target="_black"
            rel="noreferrer"
            href="https://www.instagram.com"
            >
              <FontAwesomeIcon icon={faInstagram} color="red" className="icon"/>
            </a>
          </li>
          <li>
            <a 
            target="_black"
            rel="noreferrer"
            href="https://www.youtube.com"
            >
              <FontAwesomeIcon icon={faYoutube} color="red" className="icon"/>
            </a>
          </li>
          <li>
            <a 
            target="_black"
            rel="noreferrer"
            href="https://www.facebook.com"
            >
              <FontAwesomeIcon icon={faFacebook} color="blue" className="icon"/>
            </a>
          </li>
          <li>
            <a 
            target="_black"
            rel="noreferrer"
            href="https://www.pinterest.com"
            >
              <FontAwesomeIcon icon={faPinterest} color="red" className="icon"/>
            </a>
          </li>
          <li>
            <a 
            target="_black"
            rel="noreferrer"
            href="https://www.Twitter.com"
            >
              <FontAwesomeIcon icon={faTwitter} color="lightBlue" className="icon"/>
            </a>
          </li>
          <li>
            <a 
            target="_black"
            rel="noreferrer"
            href="https://www.500px.com"
            >
              <FontAwesomeIcon icon={fa500px} color="Black" className="icon"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
