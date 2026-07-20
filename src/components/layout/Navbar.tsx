import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { navigation } from "../../data/navigation";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 z-50 w-full">
      <Container>
        <div
          ref={navbarRef}
          className={`
          rounded-2xl
          transition-all
          duration-500
          ${
            scrolled
              ? "border border-white/30 bg-white/60 shadow-2xl backdrop-blur-xl"
              : "bg-transparent"
          }
          `}
        >
          <div className="flex h-20 items-center justify-between px-8">
            {/* Logo */}

            <div>
              <h1 className="font-heading text-3xl font-bold text-primary">
                Flyon
              </h1>

              <p className="-mt-1 text-xs tracking-[3px] text-text-light uppercase">
                Travel Agency
              </p>
            </div>

            {/* Desktop */}

            <div className="hidden items-center gap-10 lg:flex">
              {navigation.map((item) => (
                <button
                  key={item.title}
                  className="relative text-sm font-medium transition hover:text-primary"
                >
                  {item.title}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button>Plan Your Journey</Button>
            </div>

            {/* Mobile */}

            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>

          {/* Mobile Placeholder */}

          {menuOpen && (
            <div className="border-t border-slate-200 p-6 lg:hidden">
              {navigation.map((item) => (
                <div
                  key={item.title}
                  className="mb-6"
                >
                  <h3 className="mb-3 font-semibold text-primary">
                    {item.title}
                  </h3>

                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="mb-2 block text-text-light transition hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;