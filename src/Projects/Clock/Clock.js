import React from 'react'
import {useState, useEffect} from 'react'
import "./Clock.scss";


const Clock = () => {

    const cTime = new Date().toLocaleTimeString()
    const [time, setTime] = useState(cTime)

    const updateTime = () =>{
        const newTime = new Date().toLocaleTimeString()
        setTime(newTime)
    }

    useEffect(() =>{
        const timeInterval = setInterval(updateTime, 1000)
        return () =>{
            clearInterval(timeInterval)
        }

    }, [time])



    // date
    const cDate = new Date().toLocaleDateString()
    const [date, setDate] = useState(cDate)

    const updateDate = () =>{
        const newDate = new Date().toLocaleDateString()
        setDate(newDate)
    }

    useEffect(() =>{
        const dateInterval = setInterval(updateDate, 1000)
        return () =>{
            clearInterval(dateInterval)
        }

    }, [date])




    // day
    
    const cDay = new Date().getDay()
    const [day, setDay] = useState(cDay)
    const weekDays = ['Sunday', 'Monday','tuesday','wednesday','thursday','friday','saturday']

    const updateDay = () =>{
        const newDay = new Date().getDay()
        setDay(newDay)
    }

    useEffect(() =>{
        const dayInterval = setInterval(updateTime, 1000)
        return () =>{
            clearInterval(dayInterval)
        }

    }, [day])


  return (
    <section id='clockbody'>
    <div id="clock">
    <p class="date">{weekDays[day]}</p>
    
    <p class="date">{date}</p>
    <p class="time">{time}</p>
    <h3 class="text">React Core Concepts</h3>
</div>
</section>
  )
}

export default Clock