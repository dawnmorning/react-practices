import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
  const [ticks, setTicks] = useState(0);

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  //   console.log(times);
  // 오후 3:12:57
  useEffect(() => {
    const interval = setInterval(() => {
      const times = new Date().toLocaleTimeString();
      let currentHour = parseInt(times.slice(3, 5));
      if (times.slice(0, 2) === "오후" && currentHour !== 12) {
        currentHour += 12;
      }
      setHour(currentHour.toString().padStart(2, "0"));

      let currentMinute = parseInt(times.slice(6, 8));
      if (currentMinute < 10) {
        setMinute(currentMinute.toString().padStart(2, "0"));
      }

      setSecond(times.slice(8, 11));
      setTicks((ticks) => ticks + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Clock
        message={`ex05: useEffect Hook example : ${ticks}`}
        hours={hour}
        minutes={minute}
        seconds={second}
      />
    </>
  );
}
