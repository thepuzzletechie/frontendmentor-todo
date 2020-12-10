const todoinput = document.querySelector('.inputenter')
const todobutton = document.querySelector('.inputbutton')
const todoList = document.querySelector(".todo-list");






todobutton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);


function addTodo(e) {

    e.preventDefault();
    
    
    if (!todoinput.value.length == 0) {

   

        


        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");


        
    
        const completedButton = document.createElement("div");
     
        completedButton.classList.add("rounder");
        todoDiv.appendChild(completedButton);
    
        const newTodo = document.createElement("p");
        newTodo.innerText = todoinput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        todoinput.value = "";
    
        const cross = document.createElement("div");
         cross.innerHTML = `<i class="fa fa-times fa-lg" aria-hidden="true"></i>
         `
         
        cross.classList.add("cancel");
        todoDiv.appendChild(cross);

       



    
        todoList.appendChild(todoDiv);
       
   
    }
   
    
}

function deleteTodo(e) { 


     
    const item = e.target;
    console.log(item)
    if (item.classList[0] === "fa") {
       // item.parentElement.remove();
        const todo = item.parentElement.parentElement.remove(); 
        
    }
    if (item.classList[0] === "rounder") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
      
    }
    
}



// filtering
//selecting
const filter = document.querySelector('.states')

// event listener


filter.addEventListener("click", filteritems)

function filteritems(e) {

    // const target = e.target;
    // const classs = target.className;

    const todos = todoList.childNodes;
  

    todos.forEach(function(todo) {
        switch (e.target.className) {
            case "all":
                todo.style.display = "flex";
                break;
                case "active":
                if (todo.classList.contains("rounder")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "completed":
                if (!todo.classList.contains("rounder")) {
                    todo.style.display = "flex";
              }
              else {
                  todo.style.display = "none";
              }
                
                  
                    break;
       }
        

    })


 

    // console.log(target)
    // if (target.classList.contains("all")) {
        
    // }
    

}