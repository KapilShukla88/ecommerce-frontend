"use client";
import React from "react";
import NewsletterView from "./newsletter-view";
import useNewsLetterController from "./news-letter-controller";

const Newsletter: React.FC<{}> = () => {
  const { email, onSendEmail, onChangeEmail } = useNewsLetterController();

  return (
    <NewsletterView
      email={email}
      onSendEmail={onSendEmail}
      onChangeEmail={onChangeEmail}
    />
  );
};

export default Newsletter;
