import Heading from "./Reused Components/Heading";

const Contact = () => {
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
                    placeholder="Your Name"
                    required="required"
                  />
                </div>
                <div className="control-group col-sm-6 mb-3">
                  <input
                    type="email"
                    className="form-control p-4"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                  />
                </div>
              </div>
              <div className="control-group mb-3">
                <input
                  type="text"
                  className="form-control p-4"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                />
              </div>
              <div className="control-group mb-3">
                <textarea
                  className="form-control py-3 px-4"
                  rows="5"
                  id="message"
                  placeholder="Message"
                  required="required"
                ></textarea>
              </div>
              <div>
                <button
                  className="btn btn-primary py-3 px-4"
                  type="submit"
                  id="sendMessageButton"
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
