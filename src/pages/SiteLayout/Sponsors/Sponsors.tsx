import { SponsorEmblem } from "./SponsorEmblem/SponsorEmblem";

import pcca from "../../../assets/images/sponsors/PCCA.svg";
import afpc from "../../../assets/images/sponsors/AFPC.svg";
import corporateMember from "../../../assets/images/sponsors/corporateMember.svg";
import amerCollegeOfApothecaries from "../../../assets/images/sponsors/amerCollegeOfApothecaries.svg";
import mixlabrxCom from "../../../assets/images/sponsors/mixlabrxCom.svg";
import style from "./sponsors.module.css";

export const Sponsors = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <SponsorEmblem image={pcca} />
        <SponsorEmblem image={afpc} />
        <SponsorEmblem image={corporateMember} />
        <SponsorEmblem image={amerCollegeOfApothecaries} />
        <SponsorEmblem image={mixlabrxCom} />
      </div>
    </div>
  );
};
