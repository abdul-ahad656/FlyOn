import type { ReactNode } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;