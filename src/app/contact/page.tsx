"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

interface ContactData {
  firma: string;
  email: string;
  jobtitel: string;
  nachricht: string;
}

function Contact() {
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const [data, setData] = useState<ContactData>({
    firma: "",
    email: "",
    jobtitel: "",
    nachricht: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: Record<string, unknown> = {
      firma: data.firma,
      email: data.email,
      jobtitel: data.jobtitel,
      nachricht: data.nachricht,
    };

    try {
      toast.loading("Loading...");
      const response = await axios.post(
        `${currentUrl}/api/send-contact`,
        formData
      );
      toast.dismiss();
      if (response.status === 200) {
        toast.success(response.data.message);
        setData({
          firma: "",
          email: "",
          jobtitel: "",
          nachricht: "",
        });
      }
    } catch (error) {
      toast.dismiss();
      console.log(error.response.data.message);
      toast.error("Leider ist ein Fehler aufgetretten");
    }
  };

  return (
    <div className="Contact-Pages">
      <div className="Text-Container">
        <h1>Lass uns schreiben.</h1>
        <h2>
          Erzähle mir von <br />
          deinem Projekt!
        </h2>
      </div>

      <div>
        <form action="" className="Contact-Formular" onSubmit={handleSubmit}>
          <h2>Sende mir dein Angebot!</h2>
          <label>
            Firma<span className="Stern">*</span>
            <input
              required
              type="text"
              placeholder="Firma"
              name="firma"
              onChange={handleChange}
              value={data.firma}
            />
          </label>
          <label>
            E-Mail<span className="Stern">*</span>
            <input
              required
              type="text"
              placeholder="E_Mail"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
          </label>
          <label>
            Jobtitel<span className="Stern">*</span>
            <input
              required
              type="text"
              placeholder="Jobtitel"
              name="jobtitel"
              onChange={handleChange}
              value={data.jobtitel}
            />
          </label>
          <label>
            Ihre Nachricht an mich<span className="Stern">*</span>
            <textarea
              required
              placeholder="Nachricht"
              name="nachricht"
              onChange={handleChange}
              value={data.nachricht}
            />
          </label>
          <input
            type="submit"
            value="Nachricht Senden"
            className="Form-Button"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
