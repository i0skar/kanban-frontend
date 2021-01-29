import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/services/task.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { AddUserPopUpComponent } from 'src/app/shared/components/add-user-pop-up/add-user-pop-up.component';
import { AddTaskPopUpComponent } from 'src/app/shared/components/add-task-pop-up/add-task-pop-up.component';
import { Task } from '../shared/models/task.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  rowsAndTasks: Task[];

  constructor(private taskService: TaskService,
              private dialogService: DialogService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getTasksByPriority();
  }

  getTasksByPriority() {
    this.taskService.getTasksByPriority().subscribe((res: {tasksList: Task[]}) => {
      this.rowsAndTasks = res.tasksList;
    });
  }

  addUserDialog() {
    const dialogRef = this.dialogService.openDialog(AddUserPopUpComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.getTasksByPriority();
    });
  }

  addTaskDialog(status: string) {
    const dialogRef = this.dialogService.openDialog(AddTaskPopUpComponent, {
      data: { status },
      height: '710px',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getTasksByPriority();
    });
  }

  delTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.getTasksByPriority();
      this._snackBar.open('Zadanie zostało usunięte.', null, {
            duration: 3000,
            panelClass: ['info-snackbar']
      });
    });
  }

  reloadTasks() {
    this.getTasksByPriority();
  }
}

