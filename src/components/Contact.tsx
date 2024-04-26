import data from "@/data/portfolio.json";

const Contact = () => {
  return (
    <section
      className="section contact center animate__animated animate__fadeIn animate__delay-5s"
      id="contact"
    >
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${data.contact.email}`} target="_blank" rel="noreferrer">
        <span className="btn btn--outline">Mail mir</span>
      </a>
    </section>
  );
};

export default Contact;
