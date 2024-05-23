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
    <h2>Email: {email}</h2>
    <h3>Mensaje: {message}</h3>
  </div>
);
