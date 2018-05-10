import React from "react";

import ContactLinks from "../components/ContactLinks";
import ContactForm from "../components/ContactForm";

const contactFormLabels = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
  buttonText: "Submit"
};

const contactFormPlaceholders = {
  name: "Your name...",
  email: "Your email...",
  subject: "Your subject...",
  message: "Your message..."
};

const onSubmit = () => {

};

const Page = () => (
  <div>
    <ContactLinks />
    <ContactForm _id="portfolioContactForm" labels={contactFormLabels} placeholders={contactFormPlaceholders} submitAction={onSubmit} />
  </div>
);

export default Page;