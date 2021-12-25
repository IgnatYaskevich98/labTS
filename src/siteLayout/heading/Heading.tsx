import style from "./heading.module.css"
import {Button} from "../components/button/Button";

export const Heading = () => {

    return (
        <div className={style.page}>
            <div className={`${style.container}  ${style.navBarBlock}`}>
                <a className={style.href} href="/">Veterinarians</a>
                <a className={style.href} href="/">How it works</a>
                <a className={style.href} href="/">About us</a>
                <a className={style.href} href="/">Blog</a>
                <a className={style.href} href="/">Shop</a>
            </div>
            <div className={`${style.container}  ${style.symbolBlock}`}>
                <h1 style={{color: '#F5A61C'}}>mixlab</h1>
            </div>
            <div className={style.authorizationBlock}>
                <div style={{color: '#6F1EAA'}}>
                    Veterinarian login
                </div>
                <Button title={'Try Mixlab'}/>
            </div>
        </div>
    );
};
