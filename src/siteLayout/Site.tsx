import {Heading} from "./heading/Heading";
import {PresentationPage} from "./presentationPage/presentationPage";
import {VeterinarianPage} from "./veterinarianPage/VeterinarianPage";
import {HowItWorks} from "./howItworks/HowItWorks";
import {About} from "./aboutUs/About";
import {Blog} from "./blog/Blog";
import {Sponsors} from "./sponsors/Sponsors";
import {Footer} from "./footer/Footer";
import style from "./site.module.css"

export const Site = () => {
    return <div className={style.site}>
        <Heading/>
        <PresentationPage/>
        <VeterinarianPage/>
        <HowItWorks/>
        <About/>
        <Blog/>
        <Sponsors/>
        <Footer/>
    </div>
};
