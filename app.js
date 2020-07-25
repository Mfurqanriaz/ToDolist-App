var list = document.getElementById("list");

function addTodo(){
    var todo_items = document.getElementById("todo-items");
    
    
    // create li tag width text node 
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_items.value)
    li.appendChild(liText)

    // create dlete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class" , "btn")
    delBtn.setAttribute("onclick" , " deleteItem(this )")
    delBtn.appendChild(delText)

    // create edit button
    var editbtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editbtn.setAttribute("class" , "btn2")
    editbtn.appendChild(editText)
    editbtn.setAttribute("onclick" , "editItem(this)")



    li.appendChild(delBtn)
    li.appendChild(editbtn)


    list.appendChild(li)
    // console.log(li)
    todo_items.value = " "
}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Vaaalue",val)
    e.parentNode.firstChild.nodeValue = editValue
}


function deleteAll(){
    list.innerHTML= " "
}