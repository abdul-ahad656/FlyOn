import { useEffect, useState } from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { Menu } from "lucide-react";

const links = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Destinations", href: "#destinations" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full py-6">
      <Container>
        <nav
          className={`flex items-center justify-between rounded-full px-8 py-4 transition-all duration-500
          
          ${
            scrolled
              ? "border border-white/40 bg-white/70 shadow-xl backdrop-blur-2xl"
              : "bg-transparent"
          }
          
          `}
        >
          <h1 className="font-heading text-2xl font-bold text-primary">
            Flyon
          </h1>

          <ul className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition hover:text-primary"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button>Book Now</Button>
          </div>

          <button className="lg:hidden">
            <Menu />
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;