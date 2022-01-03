import { Information } from "./Information/Information";

import smallImg from "../../../static/images/smallImage.svg";
import avatar from "../../../static/images/avatar.svg";

import style from "./index.module.css";
import commonStyle from "../common/styles/commonContainer.module.css";

export const Blog = () => {
  return (
    <div className={style.page}>
      <div className={`${style.container} ${commonStyle.commonContainer}`}>
        <h1>Pets love Mixlab!</h1>
        <div>See why we're 5 stars on Yelp, Google and Facebook:)</div>
        <Information smallImage={smallImg} avatar={avatar} />
      </div>
    </div>
  );
};
