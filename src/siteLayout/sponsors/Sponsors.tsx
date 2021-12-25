import {SponsorEmblem} from "./sponsorEmblem/SponsorEmblem";
import pcca from "../common/images/sponsors/PCCA.svg"
import afpc from "../common/images/sponsors/AFPC.svg"
import corporateMember from "../common/images/sponsors/corporateMember.svg"
import amerCollegeOfApothecaries from "../common/images/sponsors/amerCollegeOfApothecaries.svg"
import mixlabrxCom from "../common/images/sponsors/mixlabrxCom.svg"
import style from "./sponsors.module.css"

export const Sponsors = () => {
    return (
        <div className={style.page} >
            <div className={style.container}>
                <SponsorEmblem image={pcca}/>
                <SponsorEmblem image={afpc}/>
                <SponsorEmblem image={corporateMember}/>
                <SponsorEmblem image={amerCollegeOfApothecaries}/>
                <SponsorEmblem image={mixlabrxCom}/>
            </div>
        </div>
    );
};

