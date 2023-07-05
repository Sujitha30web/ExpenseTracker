import React from 'react'
import './expenses.css'
import ExpenseList from './expense_list/ExpenseList'
const expenses=(props)=> {
    const {expenses=[]}=props;
  return (
    <div className="expenses">
      {/* {expense filter}
      {expense list} */}
      <ExpenseList expenses={expenses}/>
    </div>
  )
}

export default expenses;
