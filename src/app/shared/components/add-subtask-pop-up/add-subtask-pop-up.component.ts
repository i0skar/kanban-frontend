import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-subtask-pop-up',
  templateUrl: './add-subtask-pop-up.component.html',
  styleUrls: ['./add-subtask-pop-up.component.scss']
})
export class AddSubtaskPopUpComponent implements OnInit {
  description2 = '';

  constructor(private dialogRef: MatDialogRef<AddSubtaskPopUpComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(this.description2);
  }

}
