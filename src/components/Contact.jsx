import React, { useState } from "react";

let Contact = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const [message, setMessage] = useState();
  const [fullMessage, setFullMessage] = useState();

  const onchange = (event) => {
    setName(event.target.value);
  };
  const msgchange = (event) => {
    setMessage(event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    setFullName(name);
    setName("");
    setFullMessage(message);
    setMessage("");
  };

  return (
    <>
      <div className="contact">
        <h1>Hello..! {fullName}</h1>
        <p>{fullMessage}</p>
        <form onSubmit={submit} className="contact2">
          <input
            onChange={onchange}
            className="message"
            type="text"
            placeholder="Enter Your Name"
            value={name}
          />
          <input
            onChange={msgchange}
            className="message"
            type="text"
            placeholder="Enter Your Message"
            value={message}
          />
          <button type="submit" className="btnsubmit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
