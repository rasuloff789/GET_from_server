(async function(){
  const response=await fetch ('https://jsonplaceholder.typicode.com/todos')
  const data=await response.json()

  for(let users of data){
    console.log(users)
/*     console.log(users.name) */
    const newTr=document.createElement("TR")
    tableId.appendChild(newTr)
    const newId=document.createElement('TD')
    newId.textContent=users.userId
    newTr.appendChild(newId)
    //userid
    const newUserId=document.createElement('TD')
    newTr.appendChild(newUserId)
    newUserId.textContent=users.id
    //title
    const newTitle=document.createElement('TD')
    newTr.appendChild(newTitle)
    newTitle.textContent=users.title
    //complated
    const newCompleted=document.createElement('TD')
    newTr.appendChild(newCompleted)
    newCompleted.textContent=users.completed
    if (users.completed===true){
     newCompleted.style.backgroundColor='green'
    }else {newCompleted.style.backgroundColor='red'}
  }
})()