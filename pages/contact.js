import Head from "next/head";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer";

const contact = () => {
  const title = "Contact | Charles Carbonel";
  const metaDescription =
    "Send me a message and I'll respond back to your email as soon as I can.";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" key="title" content={title} />
        <meta name="description" key="description" content={metaDescription} />
        <meta property="og:title" key="og:title" content={title} />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription}
        />
      </Head>
      <ContactForm />
      <Footer />
    </>
  );
};

export default contact;
