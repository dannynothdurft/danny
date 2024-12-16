import nodemailer from "nodemailer";

const contactFormME = async (mailObj, emailSubject) => {
  const transporter = nodemailer.createTransport({
    service: "strato",
    host: "smtp.strato.de",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_APP_PASSWORD,
    },
  });

  const emailContent = `
  <table style="width: 100%;">
    <tr>
        <td align="center">
            <img src="https://res.cloudinary.com/dca67w0ia/image/upload/v1685865168/logo192_i4z5s7.png" alt="Logo" style="width: 100px"/>
        </td>
    </tr>
    <tr>
        
        <td align="center">
        <table style="max-width: 760px;">
            <tr>
            <td>
                <h1>${emailSubject}</h1>
                <p>Diese Nachricht wurde von <b>${mailObj.name}</b></p>
                <p><b>${mailObj.name}</b> hat dir folgende Nachricht hinterlassen:</p>
            </td>
            </tr>
            <tr>
            <td>
                <h2>Informationen</h2>
                <p>Projekt URL: ${mailObj.projectUrl}</p>
                <p>Beschreibung: ${mailObj.description}</p>
                <p>Monatlicher Umsatz: ${mailObj.monthlyRevenue} €</p>
                <p>Monatlicher Gewinn: ${mailObj.monthlyProfit} €</p>
                <p>Monatliche Besucher: ${mailObj.monthlyVisitors}</p>
                <p>Technische Details: ${mailObj.technicalDetails}</p>
                <p>Preis Vorstellung: ${mailObj.askingPrice} €</p>
            </td>
            </tr>
        </table>
        </td>
    </tr>
  </table>
`;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: emailSubject,
    content: "Kontakt Formular",
    html: emailContent,
  };

  await transporter.sendMail(mailOptions);
};

const contactFormUSER = async (mailObj, emailSubject) => {
  const transporter = nodemailer.createTransport({
    service: "strato",
    host: "smtp.strato.de",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_APP_PASSWORD,
    },
  });

  const emailContent = `
  <table style="width: 100%;">
    <tr>
        <td align="center">
            <img src="https://res.cloudinary.com/dca67w0ia/image/upload/v1685865168/logo192_i4z5s7.png" alt="Logo" style="width: 100px"/>
        </td>
    </tr>
    <tr>
        
        <td align="center">
        <table style="max-width: 760px;">
            <tr>
            <td>
                <h1>${emailSubject}</h1>
                <p>Danke <b>${mailObj.name}</b> für dein Angebot.</p>
                <p>mit der E-Mail <b>${mailObj.email}</b> versenden
<p>Ich werde mich so schnell wie möglich an Deine E-Mail <b>${mailObj.email}</b> antworten</p>
            </td>
            </tr>
        </table>
        </td>
    </tr>
  </table>
`;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: mailObj.email,
    subject: emailSubject,
    content: "Kontakt Formular",
    html: emailContent,
  };

  await transporter.sendMail(mailOptions);
};

export { contactFormME, contactFormUSER };
