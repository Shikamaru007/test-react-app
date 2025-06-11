
import React, {useState, useEffect} from 'react'

function Dater(){

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date());          
        }, 1000);

        return() => {
             clearInterval(timer);
        } 
           
        
    }, [time]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const period = hours % 12 > 0 ? "PM" : "AM";
        hours = hours % 12 || 12;


        return(
            `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${period}`
        )

    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }
    
    return(<>
            <div className='dater-container'>
                <p className='dater'>{formatTime()}</p>
            </div>
          </>
    )
}

export default Dater;
