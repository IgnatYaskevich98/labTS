import {Header} from "./common/components/Header";
import {PresentationPage} from "./containers/Presentation";
import {VeterinarianPage} from "./containers/Veterinarian";
import {HowItWorks} from "./containers/HowItworks";
import {About} from "./containers/AboutUs";
import {Blog} from "./containers/Blog";
import {Sponsors} from "./containers/Sponsors";
import {Footer} from "./containers/Footer";

import style from "./siteLayout.module.css"

export const SiteLayout = () => {
    return <div className={style.site}>
        <Header/>
        <PresentationPage/>
        <VeterinarianPage/>
        <HowItWorks/>
        <About/>
        <Blog/>
        <Sponsors/>
        <Footer/>
    </div>
};
