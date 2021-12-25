import style from './veterinarianPage.module.css'
import {ItemsDescription} from "./components/ItemsDescription";

export const VeterinarianPage = () => {
    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.title}>
                    We couldn`t find a
                    pharmacy experience
                    worthy of our best buds-
                    so we created one
                </div>

                <div className={style.image}>
                    Some image
                </div>
            </div>

            <div className={style.container}>
                <ItemsDescription title={'Partients firs, always'}
                                  description={'We know how stressful it can be when your pet needs meds. That’s why we offer free next-day delivery and even do same-day in NYC and LA. We got you.'}
                                  isLine={true}/>
                <ItemsDescription title={'Tailored care'}
                                  description={'We’ll work with you and your veterinarian to find the very best solution for your pet. With our custom compounded options, we can change the dosage, flavor and form. We even have a flavor guarantee with over 40 options!'}
                                  descriptionSignature={'P.S. Everyone seems to love the chicken-flavored chew treats!'}
                                  isLine={true}/>
                <ItemsDescription title={'Support, 7 days a week'}
                                  description={'You’re not alone. Text, call, or email us 7 days a week—we’ll answer and do our best to sprinkle in a bit of sunshine. ☀️'}
                                  isLine={false}/>

            </div>
        </div>
    );
};

