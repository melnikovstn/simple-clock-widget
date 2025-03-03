'use client'

import "./page.css";
import { hours } from "./datas/layot";
import { Hour } from "./hour";
import { useEffect, useState } from "react";

export default function Home() {

  const h: number = new Date().getHours();
  const m: number = new Date().getMinutes();
  const s: number = new Date().getSeconds();

  const [hour, setHour] = useState<number>(h);
  const [min, setMin] = useState<number>(m);
  const [sec, setSec] = useState<number>(s);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setHour(h);
      setMin(new Date().getMinutes());
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
        {hours.map((h, i) => <Hour key={Math.random()} i={i} hours={hours} hour={h} />)}
        <div className="hourarrow" style={hstyle}></div>
        <div className="minutearrow" style={mstyle}></div>
        <div className="secundearrow" style={sstyle}></div>
        <div className="point"></div>
      </div>
    </div>
  );
}
