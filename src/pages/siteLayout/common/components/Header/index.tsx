import {Button} from "../Button";
import {NavBar} from "./components/NavBar";

import style from "./index.module.css"
import commonStyle from "../../styles/commonContainer.module.css"

export const Header = () => {
    const navLinkList = [
        {href: '', title: 'Veterinarians'},
        {href: '', title: 'How it works'},
        {href: '', title: 'About us'},
        {href: '', title: 'Blog'},
        {href: '', title: 'Shop'},
    ]

    return (
        <div className={style.page}>
            <div className={`${style.container} ${commonStyle.commonContainer}`}>

                <div className={style.navContainer}>
                    {navLinkList.map((item, key) => <NavBar key={item.title} item={item}/>)}
                </div>

                <h1 className={style.titleH1}>mixlab</h1>
                <div className={style.authorizationBlock} style={{color: '#6F1EAA'}}>
                    <span style={{marginRight: '10px'}}> Veterinarian login</span>
                    <Button title={'Try Mixlab'}/>
                </div>
            </div>
        </div>
    );
};
