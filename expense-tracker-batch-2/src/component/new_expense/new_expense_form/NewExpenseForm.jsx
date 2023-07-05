import react,{ useState } from "react";
import './NewExpenseForm.css'
const NewExpenseForm=(props)=> {

  const {save}=props;
    const [title,settitle]=useState('');
    const [amount,setamount]=useState('');
    const [date,setdate]=useState('');

      const onTitleChangeHandler = (event) => {
        settitle(event.target.value)
      }
      const onAmountChangeHandler = (event) => {
        setamount(event.target.value)
      }
      const onDateChangeHandler = (event) => {
        setdate(event.target.value)
      }

      const onSubmitHandler=(event)=>{
        event.preventDefault();
        const new_expense={
          title,
          amount,
          date:new Date(),
        }
        save(new_expense);
        // console.log(event.target.value);
      }

  return (
    <form onSubmit={onSubmitHandler}>
    <div className='new-expense__controls'> 
           <div className='new-expense__control'>
                 <label htmlFor="expense_title">Title</label>
                 <input type="text" name="title" id="expense_title" onChange={onTitleChangeHandler} value={title}/>
          </div>
          <div className='new-expense__control'>
                 <label htmlFor="expense_amount">Amount</label>
                 <input type="number" name="amount" id="expense_amount"  min="0" max="1000" onChange={onAmountChangeHandler} value={amount}/>
          </div>
          <div className='new-expense__control'>
                 <label htmlFor="expense_date">Date</label>
                 <input type="date" name="date" id="expense_date" onChange={onDateChangeHandler} value={date}/>
          </div>
    </div>



    <div className='new-expense__actions'>
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
    </div>


</form>
  )
}

export default NewExpenseForm;
