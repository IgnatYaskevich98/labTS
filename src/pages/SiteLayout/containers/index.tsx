import React from "react";
import style from "./index.module.css";
import { Header } from "../common/Components/Header";
import { PresentationPage } from "../Presentation";
import { VeterinarianPage } from "../Veterinarian";
import { HowItWorks } from "../HowItworks";
import { About } from "../AboutUs";
import { Blog } from "../Blog";
import { Sponsors } from "../Sponsors";
import { Footer } from "../Footer";

const Layout = () => {
  return (
    <div className={style.site}>
      <Header />
      <PresentationPage />
      <VeterinarianPage />
      <HowItWorks />
      <About />
      <Blog />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Layout;
