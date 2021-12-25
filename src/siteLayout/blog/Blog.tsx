import {Information} from "./components/InformationBlock/Information";
import style from "./blog.module.css"
import smallImg from "../common/images/smallImage/smallImage.svg"
import avatar from "../common/images/avatar.svg"


export const Blog = () => {
    return (
        <div className={style.page}>
            <h1>Pets love Mixlab!</h1>
            <div>See why we're 5 stars on Yelp, Google and Facebook:)</div>
            <Information smallImage={smallImg} avatar={avatar}/>
        </div>
    );
};

