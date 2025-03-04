'use client'

import { useEffect, useState } from "react";
import "./page.css";
import { Trigger } from "./trigger";

export default function Home() {

      const [date, setDate] = useState<number | Date>(0);
  
      const [hour, setHour] = useState<number>(0);
      const [min, setMin] = useState<number>(0);
      const [sec, setSec] = useState<number>(0);
    
      console.log(hour)
      console.log('min', min)
      console.log('sec', sec)
    
      useEffect(() => {
        setDate(new Date());
        const intervalID = setInterval(() => {
          setSec(new Date().getSeconds());
          setDate(new Date());
          setHour(new Date().getHours());
          setMin(new Date().getMinutes());
          setSec(sec => sec+1);
        }, 1000);
  
        return () => clearInterval(intervalID)
      }, [sec]);

  return (
    <div className="wrapper">
      <Trigger hour={hour} min={min} sec={sec} />
    </div>
  );
}

