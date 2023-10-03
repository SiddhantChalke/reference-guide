var todoArray = [];

function saveTodo(){
    var title = document.getElementById('title').value;
    todoArray.push(title);
    localStorage.setItem('my-todo', todoArray.toString());
    document.getElementById('title').value = '';

    fetchTodo();
}

function fetchTodo(){
    var str = localStorage.getItem('my-todo');
    var todoArray = str.split(',');
    var htmlStr = 
        `
        <tr>
            <th>Sr No</th>
            <th>Title</th>
            <th>Actions</th>
        </tr>
        
        `;
    
        var i=0;
        todoArray.forEach(ele=>{
            i++;
            htmlStr += `
                
                <tr>
                    <td>${i}</td>
                    <td>${ele}</td>
                    <td>
                        <button class='btn btn-outline-warning' onclick='editTodo(${i-1})'>Edit</button>
                        <button class='btn btn-outline-danger' onclick='delTodo(${i-1})'>Delete</button>
                    </td>
                </tr>
                
            `
        })

        document.getElementById('todo-table').innerHTML = htmlStr;
}

function editTodo(index){
    var newValue = prompt('Do u really want to change?', todoArray[index]);
    if(newValue != '' && newValue != null){
        todoArray[index] = newValue;
        localStorage.setItem('my-todo', todoArray.toString());
        fetchTodo();
    }
}

function delTodo(index){
    if(confirm(`Do u wanna delete? ${todoArray[index]}`)){
        todoArray.splice(index,1);
        localStorage.setItem('my-todo', todoArray.toString());
        fetchTodo();
    }
}
