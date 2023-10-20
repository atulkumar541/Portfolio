import { useState } from "react";
import Heading from "./Reused Components/Heading";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({});

  // const handleChange = (e) => {
  //   // console.log(setFormData);
  // };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    const id = e.target.id;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));

    console.log(formData);

    const validationError = {};
    if (!formData.name.trim() && id == "name") {
      validationError.name = "Name is required.";
    } else if (formData.name.trim().length <= 3 && id == "name") {
      validationError.name = "Name at least 3 characters. ";
    }
    if (!formData.email.trim() && id == "email") {
      validationError.email = "Email is required.";
    } else if (!/\S+@+\S+\.\S+/.test(formData.email) && id == "email") {
      validationError.email = "Email is not valid.";
    }

    if (!formData.subject.trim() && id == "subject") {
      validationError.subject = "Subject is required.";
    } else if (formData.subject.trim().length <= 3 && id == "subject") {
      validationError.subject = "Subject at least 3 characters. ";
    }
    if (!formData.message.trim() && id == "message") {
      validationError.message = "Message is required";
    } else if (formData.message.trim().length <= 3 && id == "message") {
      validationError.message = "Message at least 3 characters. ";
    }

    setErrors(validationError);
    if (Object.keys(validationError).length === 0) {
      alert("Done");
    }
  };

  return (
    <div className="container bg-white py-5" id="contact">
      <div className="row px-3">
        <Heading name={"Contact Me"} />
        <div className="col-12">
          <div className="contact-form">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm">
              <div className="form-row">
                <div className="control-group col-sm-6 mb-3">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="control-group col-sm-6 mb-3">
                  <input
                    type="email"
                    className="form-control p-4"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
              </div>
              <div className="control-group mb-3">
                <input
                  type="text"
                  className="form-control p-4"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.subject && (
                  <span className="error">{errors.subject}</span>
                )}
              </div>
              <div className="control-group mb-3">
                <textarea
                  className="form-control py-3 px-4"
                  rows="5"
                  id="message"
                  name="message"
                  placeholder="Message"
                  autoComplete="off"
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>
              <div>
                <button
                  className="btn btn-primary py-3 px-4"
                  type="submit"
                  id="sendMessageButton"
                  name="sendMessageButton"
                  title="Send Message"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
