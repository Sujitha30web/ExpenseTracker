import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './component/expenses/expense_item/ExpenseItem'
import ExpenseList from './component/expenses/expense_list/ExpenseList'
import Expenses from './component/expenses/expenses'
import NewExpense from './component/new_expense/NewExpense'
import { getAllExpenses,addExpense } from './api'

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  const [expenses, setExpenses]= useState([]);

  // const add=(expense)=>{

  //   console.log('app',expense);
  //   setExpenses((previous_expenses)=>{
  //     return [expense, ...previous_expenses];
  //   })
  // }

  useEffect(()=>{
  getAllExpenses(setExpenses);
  },[])
 
  
  const onAddNewExpense=(val)=>{
   
    addExpense(val,
      ()=>{
    setExpenses((previos_expenses)=>{
      return [ ...previos_expenses,val]
    })
  // DUMMY_DATA.push(expense);
// console.log('Added',DUMMY_DATA)
  }
    )};

  return (
    <div className="App">
      {/* <ExpenseList  expenses={DUMMY_DATA} /> */}
      <NewExpense submitAction={onAddNewExpense}/>
      <Expenses expenses={expenses} />

      {/* <ExpenseItem title={DUMMY_DATA[0].title}
     amount={DUMMY_DATA[0].amount}
     date={DUMMY_DATA[0].date}
     />
     <ExpenseItem title={DUMMY_DATA[1].title}
     amount={DUMMY_DATA[1].amount}
     date={DUMMY_DATA[1].date}
     />
     <ExpenseItem title={DUMMY_DATA[2].title}
     amount={DUMMY_DATA[2].amount}
     date={DUMMY_DATA[2].date}
     />
      <ExpenseItem title={DUMMY_DATA[3].title}
     amount={DUMMY_DATA[3].amount}
     date={DUMMY_DATA[3].date}
     />  */}


     {/* {DUMMY_DATA.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      
      
    </div>
  );
    }

export default App;
