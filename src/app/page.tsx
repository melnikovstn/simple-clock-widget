'use client'

import "./page.css";
import { hours } from "./datas/layot";
import { Hour } from "./hour";
import { useEffect, useState } from "react";

export default function Home() {

  const [date, setDate] = useState<Date>(new Date());

  const [hour] = useState<number>(date.getHours());
  const [min] = useState<number>(date.getMinutes());
  const [sec, setSec] = useState<number>(date.getSeconds());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
      setSec(sec => sec+1);
    }, 1000);

    return () => clearInterval(intervalID)
  }, []);

  const hstyle = {
    transform: `rotate(${hour*30 + (min * 6) / 12}deg)`
  }

  const mstyle = {
    transform: `rotate(${min * 6}deg)`
  }

  const sstyle = {
    transform: `rotate(${sec * 6}deg)`
  }

  return (
    <div className="wrapper">
      <div className="clock_wrapper">
        {hours.map((h, i) => <Hour key={hours[i]} i={i} hours={hours} hour={h} />)}
        <div className="hourarrow" style={hstyle}></div>
        <div className="minutearrow" style={mstyle}></div>
        <div className="secundearrow" style={sstyle}></div>
        <div className="point"></div>
      </div>
    </div>
  );
}
