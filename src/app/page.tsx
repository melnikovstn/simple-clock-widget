'use client'

import { useEffect, useState } from "react";
import "./page.css";
import { Trigger } from "./trigger";

export default function Home() {

  const [flag, setFlag] = useState('');

      const [date, setDate] = useState<Date>(new Date());
  
      const [hour, setHour] = useState<number>(date.getHours());
      const [min, setMin] = useState<number>(date.getMinutes());
      const [sec, setSec] = useState<number>(date.getSeconds());

      useEffect(() => {
        setFlag(Math.random().toString())
      }, [sec])
    
      console.log(hour)
      console.log('min', min)
      console.log('sec', sec)
    
      useEffect(() => {
        setDate(new Date());
        const intervalID = setInterval(() => {
          new Date();
          setDate(new Date());
          setHour(new Date().getHours());
          setMin(new Date().getMinutes());
          setSec(sec => sec+1);
        }, 1000);
  
        return () => clearInterval(intervalID)
      }, [sec]);

  return (
    <div className={`wrapper ${flag}`}>
      <Trigger hour={hour} min={min} sec={sec} />
    </div>
  );
}

