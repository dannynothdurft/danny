import DATA from "@/data/portfolio.json";

const Contact = () => {
  if (!DATA.contact.email) return null;

  return (
    <section
      className="section contact center animate__animated animate__fadeIn animate__delay-5s"
      id="contact"
    >
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${DATA.contact.email}`} target="_blank" rel="noreferrer">
        <button type="button" className="btn btn--outline">
          Email Me
        </button>
      </a>
    </section>
  );
};

export default Contact;
