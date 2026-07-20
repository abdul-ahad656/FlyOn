export interface NavLink {
  label: string;
  href: string;
}

export interface NavCategory {
  title: string;
  color: string;
  textColor: string;
  links: NavLink[];
}

export const navigation: NavCategory[] = [
  {
    title: "Explore",
    color: "#005D78",
    textColor: "#ffffff",
    links: [
      { label: "Destinations", href: "#destinations" },
      { label: "Tour Packages", href: "#packages" },
      { label: "Experiences", href: "#experiences" },
    ],
  },
  {
    title: "Services",
    color: "#123845",
    textColor: "#ffffff",
    links: [
      { label: "Visa Assistance", href: "#visa" },
      { label: "Flight Booking", href: "#flights" },
      { label: "Hotels", href: "#hotels" },
    ],
  },
  {
    title: "Company",
    color: "#D8B56D",
    textColor: "#1E293B",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
];