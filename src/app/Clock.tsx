import { FC, useEffect, useState } from "react";
import { hours } from "./datas/layot";
import { Hour } from "./Hour"

export const Clock: FC = () => {

  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);

    useEffect(() => {
      const intervalID = setInterval(() => {
        setSec(new Date().getSeconds());
        setHour(new Date().getHours());
        setMin(new Date().getMinutes());
        setSec(sec => sec+1);
      }, 1000);

      return () => clearInterval(intervalID);
  }, [sec]);

    const hstyle = {
      transform: `rotate(${sec ? (hour*30 + (min * 6) / 12) : (hour*30 + (min * 6) / 12)}deg)`
    }
  
    const mstyle = {
      transform: `rotate(${sec ? min * 6 : min * 6}deg)`
    }
  
    const sstyle = {
      transform: `rotate(${sec * 6}deg)`
    }

    return (<div className="clock_wrapper">
        {hours.map((h, i) => <Hour key={hours[i]} i={i} hour={h} />)}
        <div className='hourarrow' style={hstyle}></div>
        <div className="minutearrow" style={mstyle}></div>
        <div className="secundearrow" style={sstyle}></div>
        <div className="point"></div>
      </div>)
}