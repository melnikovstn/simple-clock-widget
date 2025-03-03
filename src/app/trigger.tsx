import { FC } from "react";
import { hours } from "./datas/layot";
import { Hour } from "./hour";

type Tprops = {
  hour: number;
  min: number;
  sec: number;
}

export const Trigger: FC<Tprops> = ({hour, min, sec}) => {

    const hstyle = {
      transform: `rotate(${hour*30 + (min * 6) / 12}deg)`
    }
  
    const mstyle = {
      transform: `rotate(${min * 6}deg)`
    }
  
    const sstyle = {
      transform: `rotate(${sec * 6}deg)`
    }

    return (<div className="clock_wrapper">
        {hours.map((h, i) => <Hour key={hours[i]} i={i} hours={hours} hour={h} />)}
        <div className='hourarrow' style={hstyle}></div>
        <div className='minutearow' style={mstyle}></div>
        <div className="secundearrow" style={sstyle}></div>
        <div className="point"></div>
      </div>)
}