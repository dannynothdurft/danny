export const MainConfig = {
  title: "Danny Nothdurft",
  logo: "/logo.svg",
  logoAlt: "Logo - Danny Nothdurft",
  company: "Danny Nothdurft",
  ceo: "Danny Nothdurft",
  addres: "Tribünenweg 32",
  zip: "22111",
  city: "Hamburg",
  land: "Deutschland",
  mobile: "+49(0) 176 566 121 13",
  email: "kontakt@danny-nothdurft.de",
};

export const NavigationConfig = {
  baseLink: "/",
  navigationLinks: [
    {
      id: "DN-N01",
      label: "Startseite",
      href: "/",
    },
    {
      id: "DN-N02",
      label: "Kontakt",
      href: "kontakt",
    },
  ],
  cta: {
    label: "Jetzt verkaufen",
    href: "/kontakt",
  },
};

export const FooterConfig = {
  fromYear: "&copy; 2023 -",
  navigationLinks: [
    {
      id: "DN-FN01",
      label: "Impressum",
      href: "impressum",
    },
    {
      id: "DN-FN02",
      label: "Datenschutz",
      href: "datenschutz",
    },
  ],
};
