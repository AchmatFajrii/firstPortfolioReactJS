import DescriptionMe from "../Elements/DescriptionMe";
import ContactForm from "../Elements/ContactForm";
import TitleContact from "../Elements/TitleContact";

const Contact = () => {
  return (
    <section className="contact mt-24">
      <TitleContact></TitleContact>
      <DescriptionMe></DescriptionMe>
      <ContactForm></ContactForm>
    </section>
  );
};

export default Contact;
