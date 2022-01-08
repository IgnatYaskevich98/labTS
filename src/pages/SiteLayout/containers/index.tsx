import React from "react";
import style from "./index.module.css";

import { Header } from "../common/Header";
import { PresentationPage } from "../Presentation/Presentation";
import { VeterinarianPage } from "../Veterinarian/Veterinarian";
import { HowItWorks } from "../HowItworks/HowItworks";
import { About } from "../AboutUs/AboutUs";
import { Blog } from "../Blog/Blog";
import { Sponsors } from "../Sponsors/Sponsors";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
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
