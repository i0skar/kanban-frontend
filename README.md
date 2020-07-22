# Kanban Board
Kanban Board is the application for managing tasks and processes within an organization. The Frontend was created using **Angular 9**.

For the Backend look [here](https://github.com/kanban-netherboys/kanban-backend).

##  Main functionalities

The application consists of swimlanes. Each swimlane has 5 main column: Priority, Backlog, Next, In Progress (which has another 5 column) and Done.

![Alt text](https://raw.githubusercontent.com/i0skar/Kanban-frontend/master/readme%20content/main%20page.png?raw=true)

Lets focus on first swimlane and show main functionalities:

1. Add the new user "Ronald Bell".

![Alt text](https://raw.githubusercontent.com/i0skar/Kanban-frontend/master/readme%20content/add%20user.gif?raw=true)


2. Add the new task titled "Make userguide.md to present the project and its functionalities" to the "Backlog". Assign our user.

![Alt text](https://github.com/i0skar/Kanban-frontend/blob/master/readme%20content/add%20new%20task.gif?raw=true)


3. Move task from "Backlog" to "Next".

![Alt text](https://github.com/i0skar/Kanban-frontend/blob/master/readme%20content/move%20task%20from%20backlog%20to%20next.gif?raw=true)


4. Edit task: assign another user "Umer Sharp", change color, add a subtask.

![Alt text](https://github.com/i0skar/Kanban-frontend/blob/master/readme%20content/edit%20task.gif?raw=true)


5. Move the task to "In Progress". Block the task because of unexpected bug - progress cannot be made untill the issue is fixed.

![Alt text](https://github.com/i0skar/Kanban-frontend/blob/master/readme%20content/block%20task.gif?raw=true)


6. Unblock the task after the problem was resolved. Move the task to "Done" after it was completed.

![Alt text](https://github.com/i0skar/Kanban-frontend/blob/master/readme%20content/move%20to%20done.gif?raw=true)


7. Our task can also be deleted.

![Alt text](https://github.com/i0skar/Kanban-frontend/blob/master/readme%20content/delete%20task.gif?raw=true)



## To do list

1. Functional:
- User panel with all user related options.
- Swimlanes management.
- Column customization.
- Assigning more users to tasks.
- Showing subtasks also on the main page, not only inside the edit task panel.

2. Visual:
- Fully responsive design.
- More transparent Add/Edit task popup.
- Showing snackbars with confirmations atfer actions such as adding a new task.
- Color picker for tasks.
