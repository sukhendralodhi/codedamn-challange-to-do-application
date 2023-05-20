document.getElementById('submitBtn').addEventListener('click', function () {
	const taskInput = document.getElementById('taskInput');
	const taskDescription = taskInput.value;
	const taskList = document.getElementById('taskList');

	const listItem = document.createElement('li');
    const para = document.createElement('p');
	para.innerHTML = taskDescription;
    para.classList.add('text-3xl', 'px-4')
    listItem.classList.add('flex', 'space-x-4');
    

	const completeButton = document.createElement('button');
	completeButton.innerHTML = 'Complete';
	completeButton.classList.add('completeBtn','bg-orange-400', 'px-4', 'py-0.5');
	completeButton.addEventListener('click', function () {
		listItem.classList.toggle('completed');
	});

	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = 'Delete';
	deleteButton.classList.add('deleteBtn', 'bg-red-400', 'px-4', 'py-0.5');
	deleteButton.addEventListener('click', function () {
		taskList.removeChild(listItem);
	});

    listItem.appendChild(para);
	listItem.appendChild(completeButton);
	listItem.appendChild(deleteButton);
	taskList.appendChild(listItem);

	taskInput.value = '';
});
