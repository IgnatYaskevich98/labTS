import style from './presentationPage.module.css'
import {Button} from "../components/button/Button";
import coverImg from "../common/pexels-abdullah-ghatasheh-1631677.jpg";


export const PresentationPage = () => {

    return (
        <div className={style.page} style={{backgroundImage: `url(${coverImg})`}}>
            <div className={style.itemBlock}>
                <div className={style.heading}>
                    The pet pharmacy
                    <span/>
                    humans are jealous of.
                </div>
            </div>

            <div className={style.itemBlock}>
                <div className={style.description}>
                    <div>
                        5 stars on <a href={'/'}
                                      className={style.href}>Yeap</a>, <a href={'/'}
                                                                          className={style.href}>Google</a> and <a
                        href={'/'} className={style.href}>
                        Facebook</a>, because your
                    </div>
                    <div> best deserves only the best in pet care</div>
                </div>

                <div style={{margin: '10px'}}>
                    <Button title={'Try Mixlab'}/>
                </div>

            </div>
        </div>
    );
};


