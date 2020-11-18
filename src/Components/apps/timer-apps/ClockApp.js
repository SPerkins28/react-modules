import React, { useState, useEffect } from 'react';

const getTimeString = () =>{ 
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() =>{
            let date = getTimeString();
            setTime(date);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const psTime = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});

    return (
        <div>
            <h1 className="section-title">React Clock - Indianapolis</h1>
            <p>{time}</p>
            <hr className="explanation" />
            <h1>React Clock - Seattle</h1>
            <p>{psTime}</p>
        </div>
    )
}

export default ClockApp;