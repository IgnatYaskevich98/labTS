import {Button} from "../components/button/Button";
import coverImage from "../common/images/coverImage.svg"
import style from "./aboutUs.module.css"

export const About = () => {
    return (
        <div className={style.page}>
            <div className={style.image}>
                <img src={coverImage} alt={'some image'}/>
            </div>
            <div className={style.descriptionBlock}>
                <div className={style.forWhat}>{'For Veterinarians'}</div>
                <h1>We're here to support you and your practice</h1>
                <div>{'Mixlab offers a simple, fast, reliable (and fun) home delivery pharmacy service ' +
                    'for your clients. No more delays, no more miscommunications, no more grumpy pets. It’s time ' +
                    'to partner with a pharmacy that cares about customer experience as much as you do.'}
                </div>
                <Button title={'Learn More'}/>
            </div>
        </div>
    );
};
