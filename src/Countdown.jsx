import React, {useState, useEffect} from 'react';

function Countdown(){

    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(3);

    function showNotif(){   
        setIsActive(true);
    }

    useEffect(() => {
                let timer;
                let num;

               if(isActive){
                setCount(3)

                timer = setInterval(() => {
                    setCount(c => (c - 1))
                }, 1000)
                
                
                num = setTimeout(() => {
                    setIsActive(false)
                }, 3000)
               }
                return(() => {
                    clearInterval(timer);
                    clearTimeout(num);
                })
            }, [isActive])

    return(<>
            <button onClick={() => showNotif()}>Show Notification</button><br /><br />
            {isActive && <p>Countdown in {count}</p>}
           </>)
}

export default Countdown;