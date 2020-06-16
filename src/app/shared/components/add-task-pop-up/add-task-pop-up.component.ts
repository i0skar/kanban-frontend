import { Component, OnInit, Inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { DialogService } from '../../services/dialog.service';
import { AddSubtaskPopUpComponent } from '../add-subtask-pop-up/add-subtask-pop-up.component';

@Component({
  selector: 'app-add-task-pop-up',
  templateUrl: './add-task-pop-up.component.html',
  styleUrls: ['./add-task-pop-up.component.scss']
})
export class AddTaskPopUpComponent implements OnInit {

  taskForm: FormGroup;

  editMode = false;
  editedTaskStatus: any;

  users: User[];
  rows = [1, 2, 3, 4];

  colors = ['red', 'green', 'blue', 'yellow'];

  selectedUser1;
  selectedUser2;
  selectedUser3;
  // selectedRow;
  selectedColor = 'none';
  none = 'None';

  subtasks = [];

  constructor(private taskService: TaskService,
              private userService: UserService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<AddTaskPopUpComponent>,
              private dialogService: DialogService) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      person: new FormControl(null),
      block: new FormControl(false),
      selectedRow: new FormControl(null)
    });

    if (this.data.id !== undefined) {
      this.editMode = true;
      this.taskService.getSingleTask(this.data.id).subscribe((res: any) => {
        this.editedTaskStatus = res.status;
        this.taskForm.patchValue({title: res.title});
        this.taskForm.patchValue({description: res.description});
        this.taskForm.patchValue({block: res.blocked});
        this.subtasks = res.subtaskList;
        if (res.userList[0] !== undefined) {
          this.selectedUser1 = res.userList[0].name + ' ' + res.userList[0].surname;
        }
        if (res.userList[1] !== undefined) {
          this.selectedUser2 = res.userList[1].name + ' ' + res.userList[1].surname;
        }
        if (res.userList[2] !== undefined) {
          this.selectedUser3 = res.userList[2].name + ' ' + res.userList[2].surname;
        }
        this.selectedColor = res.color;
      });
      this.taskService.getTasksByPriority().subscribe();
    }
    this.getAllUsers();
  }

  split(selecUser) {
    if (selecUser !== undefined) {
      return selecUser.split(' ', 2);
    }
  }

  onAddSubtask() {
    this.addSubtaskDialog();
  }

  onDeleteSubtask(subtask) {
    const index = this.subtasks.indexOf(subtask);
    if (index > -1) {
      this.subtasks.splice(index, 1);
    }
  }

  onSubmit() {
    let taskFormValue = {
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      status: this.editMode ? this.editedTaskStatus : this.data.status,
      color: this.selectedColor,
      blocked: this.taskForm.value.block,
      userList: [],
      subtaskList: [],
    };
    const selectedUsers = [this.selectedUser1, this.selectedUser2, this.selectedUser3];
    for (const selectedUser of selectedUsers) {
      const splitted = this.split(selectedUser);
      if (splitted !== undefined && splitted.length > 1) {
        taskFormValue.userList.push({name: splitted[0], surname: splitted[1]});
      }
    }
    taskFormValue.subtaskList = this.subtasks;
    if (this.editMode) {
      taskFormValue = {...taskFormValue, ...{id: this.data.id}};
      this.taskService.patchTaskWithUser(taskFormValue).subscribe(() => this.dialogRef.close());
    }
    if (!this.editMode) {
      taskFormValue = {...taskFormValue, ...{priority: this.taskForm.value.selectedRow}};
      this.taskService.addTaskWithUser(taskFormValue).subscribe(() => this.dialogRef.close());
    }
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res: {userList: User[]}) => {
      this.users = res.userList;
    });
  }

  addSubtaskDialog() {
    const dialogRef = this.dialogService.openDialog(AddSubtaskPopUpComponent, {
      height: '300px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.subtasks.push({description: result, completionStatus: false});
    });
  }

}
