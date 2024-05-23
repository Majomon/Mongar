import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
  name,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
  </div>
);
