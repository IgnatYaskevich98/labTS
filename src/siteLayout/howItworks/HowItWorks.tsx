import {Button} from "../components/button/Button";
import {Explanation} from "./components/explanation/Explanation";
import style from "./howItWorks.module.css";
import parrot from "../common/images/smallImage/parrot.svg"
import dog from "../common/images/smallImage/dog.svg"
import hare from "../common/images/smallImage/hare.svg"

export const HowItWorks = () => {

    return (
        <div className={style.page} style={{backgroundColor:"#FAF9F6"}}>
            <h1>How it works</h1>
            <div className={style.container}>
                <Explanation title={'We receive your prescription'}
                             description={'Either your veterinarian sends us a prescription or we reach out to them for you. Whatever is easiest!'}
                             image={parrot}/>
                <Explanation title={'We deliver your care package'}
                             description={'Fast and free next-day delivery, straight to your door. Same-day in NYC and LA.'}
                             image={hare}/>
                <Explanation title={'You treat your pet'}
                             description={'Give your pet the care they need to feel better. Plus they can play with our included toy!'}
                             image={dog}/>
            </div>
            <Button title={'Learn More'}/>
        </div>
    );
};
