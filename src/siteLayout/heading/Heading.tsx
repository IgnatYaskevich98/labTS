import style from "./heading.module.css"
import {Button} from "../components/button/Button";

export const Heading = () => {

    return (
        <div className={style.page}>
            <div className={style.container}>
                <a className={style.href} href="/">Veterinarians</a>
                <a className={style.href} href="/">How it works</a>
                <a className={style.href} href="/">About us</a>
                <a className={style.href} href="/">Blog</a>
                <a className={style.href} href="/">Shop</a>
            </div>
            <h1 className={style.titleH1}>mixlab</h1>
            <div className={style.authorizationBlock} style={{color: '#6F1EAA'}}>
                <span style={{marginRight: '10px'}}> Veterinarian login</span>
                <Button title={'Try Mixlab'}/>
            </div>
        </div>
    );
};
