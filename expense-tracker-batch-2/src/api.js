

export const getAllExpenses = async(setExpenses)=>{
   await fetch("http://localhost:3000/api/v2/expenses")
    .then((response)=>response.json())
    .then((d)=>{
        console.log(d.data);
        setExpenses(d.data)}
        )
        
   
  }

  export const addExpense = (postData = {},callback)=>{
   
    fetch("http://localhost:3000/api/v2/expenses/create",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(postData)
    })
    .then((response)=>response.json())
    .then((e)=>{
        console.log("Hi");
        callback && callback();
    })
  }