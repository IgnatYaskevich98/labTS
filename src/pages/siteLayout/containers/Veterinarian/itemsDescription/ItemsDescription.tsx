import {FC} from "react";
import style from "./itemsDescription.module.css"

type DescriptionType = {
    title: string
    description: string
    isLine: boolean
    descriptionSignature?: string

}
export const ItemsDescription: FC<DescriptionType> = ({title, description, isLine, descriptionSignature}) => {
    return (
        <div className={style.containerDescription}>
            <h2 className={style.title}>{title}</h2>
            <div>
                {description}
            </div>

            {descriptionSignature && <div style={{margin: '5px 0 0 0'}}>{descriptionSignature}</div>}
            {isLine && <hr className={style.hr}/>}

        </div>
    );
};

