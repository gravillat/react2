import React from 'react';
import './CountUI.css'
function CountUI(props) {
    return (
        <div className='countUI'>
        <p className={props.count>0? 'active':props.count<0?'negative':null}>{props.count}</p>
        <div className='button__wrapper'>
                <button onClick={props.decrement}>-</button>
                <button onClick={props.increment}>+</button>
        </div>
        </div>
    );
}

export default CountUI;