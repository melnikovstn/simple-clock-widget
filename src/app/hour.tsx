import { FC } from "react";
import "./hour.css"

type Thour = {hour: number,
              hours: number[],
              h?: number,
              i: number
}

export const Hour: FC<Thour> = ({hour, hours, i}) => {
    return (
            <p className={`hour ${i === 0 ? 'hour12' : ''}${i === 1 ? 'hour9' : ''}${i === 2 ? 'hour6' : ''}${i === 3 ? 'hour3' : ''}`} >{hour}</p>
    )
}; 