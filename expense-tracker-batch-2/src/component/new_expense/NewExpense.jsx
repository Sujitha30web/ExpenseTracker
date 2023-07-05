import React from 'react'
import './NewExpense.css'
import NewExpenseForm from './new_expense_form/NewExpenseForm';
import {nanoid} from "nanoid"

const NewExpense=(props)=>{
  const  {submitAction}=props;

  const onAddnewExpense = (expense)=>{
    const modified_expense={
      ...expense,
      id:nanoid(),
    }

    submitAction(modified_expense);
    // console.log('NewExpense',expense)
  }
  return (

    <div className='new-expense'>
            <NewExpenseForm save={onAddnewExpense}/>
    </div>

  )
}


export default NewExpense;