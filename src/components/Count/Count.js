import React ,{useEffect, useState} from 'react';
import './Count.css'
import CountUI from './CountUI/CountUI';
function Count(props) {
    const[count,setCount]=useState(0)  

    // useEffect(()=>{
    //     storage()
    // })
    // const storage=()=>{
    //     localStorage.setItem('count',JSON.stringify(count))
    // }



    const decrement=()=>{
        setCount(count-1)
    }
    const increment=()=>{
        setCount(count+1)
    }


    console.log(count);
      return (
        <div className='count'>
   <CountUI
count={count}
decrement={decrement}
increment={increment}
   />
            </div>
       
    );
}

export default Count;