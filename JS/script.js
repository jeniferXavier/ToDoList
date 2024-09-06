document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    const taskName = document.createElement('span');
    taskName.textContent = taskText;

    const editBtn = addEditButton(taskItem);
    const deleteBtn = addDeleteButton(taskItem,taskList);
    

    taskItem.appendChild(taskName);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}

function addEditButton(taskItem){
    const editBtn = document.createElement('span');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', function() {
        edit(taskItem);
        
    });
    return editBtn;
}


function addDeleteButton(taskItem,taskList){
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    return deleteBtn;
}

function edit(taskItem){
    
    firstElementBefore = taskItem.firstElementChild;
    taskName = taskItem.firstElementChild.innerText;
    const parentDiv = document.createElement('div');
    parentDiv.id = 'parentDiv';
    const editInput = document.createElement('input');
    editInput.setAttribute("type", "text");
    editInput.setAttribute("value", taskName);
    parentDiv.appendChild(editInput);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    //saveBtn.classList.add('edit');
    saveBtn.addEventListener('click', function() {
       editedText = editInput.value;
       if(taskName != editedText){
        firstElementBefore.innerText = editedText;
        taskItem.replaceChild(firstElementBefore, parentDiv);
       }
       else
       {
        taskItem.replaceChild(parentDiv, firstElementBefore);
       }
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancelbtn');
    cancelBtn.addEventListener('click', function() {
        taskItem.replaceChild(firstElementBefore, parentDiv);
    });
    parentDiv.appendChild(saveBtn);
    parentDiv.appendChild(cancelBtn);
    taskItem.replaceChild(parentDiv, firstElementBefore);
    
}
