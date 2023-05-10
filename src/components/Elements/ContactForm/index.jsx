const ContactForm = () => {
  return (
    <>
      <p className="text-center text-white font-semibold text-2xl mt-20">
        <span className="text-primary">#</span>or write your message in this
        form
      </p>
      <div className="contact-form mx-auto w-[45rem] border border-primary p-4 mt-5 text-white">
            <form action="#" method="post">
              <div className="email-input">
                <label htmlFor="email">Your Email</label> <br />
                <input
                  className="w-full mt-2 p-2 text-black"
                  id="email"
                  placeholder="name@gmail.com"
                  type="email"
                />
              </div>
              <div className="subject-input mt-5">
                <label htmlFor="subject">Subject</label> <br />
                <input
                  className="w-full mt-2 p-2 text-black"
                  id="subject"
                  placeholder="Let us know how i can help you"
                  type="text"
                />
              </div>
              <div className="message-input mt-5">
                <label htmlFor="message">Your Message</label> <br />
                <textarea
                  className="w-full mt-2 p-2 text-black"
                  name=""
                  id="message"
                  rows="5"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button className="p-2 mt-2 bg-primary text-black" type="submit">
                Send Message
              </button>
            </form>
          </div>
    </>
  );
};

export default ContactForm;
