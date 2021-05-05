const url = "/api/todos";
var list = document.getElementById('list')
var enter = document.getElementById('todoInput');

fetch(url)
.then(data => data.json())
.then(addTodos)

enter.addEventListener('keypress', function(e){
    if(e.which === 13) {
        createTodo()
    }
})
//************************* DELETE FUNCTION */
$('ul').on('click', "button", function(e){
    e.stopPropagation()
   var clickedId = $(this).parent().prop("id")
   $.ajax({
       method:'DELETE',
       url: "/api/todos/" + clickedId
   })
   .then(data => console.log(data))
   $(this).parent().remove();
})
//***************************UPDATE FUNCTION */
$('ul').on('click', "li", function(){
    var todoStatus = $(this).prop('completed')
    var updateData = {completed: !todoStatus}
    var clickedId = $(this).prop("id")
   $.ajax({
      method:'PUT',
      url: "/api/todos/" + clickedId,
      data: updateData
  })
  .then(data => console.log(data))
    $(this).toggleClass("done")
 })
 

function addTodo(todo) {
       var newTodo = document.createElement('li')
       var closeSign = document.createElement('button')
       closeSign.appendChild(document.createTextNode('X'))
       closeSign.classList.add("button")
       newTodo.appendChild(document.createTextNode(todo.name))
       newTodo.id = todo._id
       newTodo.completed = todo.completed
       if(todo.completed){
           newTodo.classList.add("done")
       }
       newTodo.classList.add("hovered")
       newTodo.appendChild(closeSign)
       list.appendChild(newTodo)
}

function addTodos(todo){
    todo.forEach(function(todo){
       addTodo(todo)
    })
}
// JQUERY
function createTodo() {
    var usrInput = enter.value;
    $.post('/api/todos', {name:usrInput})
    .then(newTodo => {
        addTodo(newTodo)
        enter.value = ""
    })
    .catch(error => console.log(error))

}



