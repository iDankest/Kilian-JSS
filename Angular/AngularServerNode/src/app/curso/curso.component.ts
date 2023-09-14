import {Component, Inject} from '@angular/core';
import {Dialog, DIALOG_DATA} from '@angular/cdk/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  constructor(public dialog: Dialog) {}

  openDialog() {
    this.dialog.open(CdkDialogDataExampleDialog, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }
}
@Component({
  selector: 'cdk-dialog-data-example-dialog',
  templateUrl: 'dia.html',
  // styleUrls: ['./cdk-dialog-data-example-dialog.css'],
})
export class CdkDialogDataExampleDialog {
  constructor(@Inject(DIALOG_DATA) public data: DialogData) {}
}
