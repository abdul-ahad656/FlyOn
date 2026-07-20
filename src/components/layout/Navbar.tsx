import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import NavCard from "./navCard";
import { navigation } from "../../data/navigation";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-6 z-50 w-full">
      <Container>
        <motion.div
          ref={navbarRef}
          animate={{
            height: menuOpen ? "auto" : 80,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            relative
            overflow-hidden
            rounded-[32px]
            ${
              scrolled || menuOpen
                ? "border border-white/20 bg-white/60 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,.12)]"
                : "bg-transparent"
            }
          `}
        >
          {/* Glass Border */}

          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/20" />

          {/* Top Bar */}

          <div className="relative flex h-20 items-center justify-between px-8">

            {/* Logo */}

            <div className="cursor-pointer transition duration-300 hover:scale-105">
              <h1 className="font-heading text-3xl font-bold text-primary">
                Flyon
              </h1>

              <p className="text-xs uppercase tracking-[5px] text-text-light">
                Luxury Travel
              </p>
            </div>

            {/* Right Side */}

            <div className="hidden items-center gap-4 lg:flex">

              <Button className="group flex items-center">

                Plan Journey

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />

              </Button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/20 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/40"
              >
                <span className="font-medium">

                  {menuOpen ? "Close" : "Menu"}

                </span>

                {menuOpen ? (
                  <X
                    size={18}
                    className="transition duration-300 group-hover:rotate-90"
                  />
                ) : (
                  <Menu
                    size={18}
                    className="transition duration-300 group-hover:rotate-12"
                  />
                )}
              </button>

            </div>

            {/* Mobile */}

            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

          {/* Expandable Menu */}

          <AnimatePresence>

            {menuOpen && (

              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                {/* Divider */}

                <div className="mx-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                {/* Cards */}

                <motion.div
                  variants={{
                    show: {
                      transition: {
                        staggerChildren: 0.12,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                  className="grid gap-6 p-8 md:grid-cols-3"
                >
                  {navigation.map((item) => (
                    <NavCard
                      key={item.title}
                      title={item.title}
                      color={item.color}
                      textColor={item.textColor}
                      links={item.links}
                    />
                  ))}
                </motion.div>

              </motion.div>

            )}

          </AnimatePresence>

        </motion.div>
      </Container>
    </header>
  );
};

export default Navbar;