import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from '../expense_date/ExpenseDate'

const ExpenseItem = (props)=>{
    const {title="sample",
        amount,
        date=new Date()
    }=props;
const [title1,setTitle1]=useState(title)
function onTitleChange(){
    setTitle1('updated');
}
   
    
return(
    <li>
<div className='expense-item'>

    <ExpenseDate date={date}/>
    <div className='expense-item__description'>
        <h2>{title1}</h2>
        {/* <h2>{title}</h2> */}
        <div className='expense-item__price'>${amount}</div>
    </div>
    {/* <button onClick={onTitleChange}>Update</button> */}
</div>
</li>
);
};

export default ExpenseItem;
