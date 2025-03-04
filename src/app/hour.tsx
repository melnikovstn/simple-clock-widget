import { FC } from "react";
import "./hour.css"

type Thour = {
        hour: number,
        i: number
    };

export const Hour: FC<Thour> = ({hour, i}) => {
    return (
            <p className={`hour hour${i}`} >{hour}</p>
    )
};
