// modal.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
 selector: 'modal',
 templateUrl: './modal.html',
 styleUrls: ['./modal.component.css']
})
export class ModalComponent {
 constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

 onNoClick(): void {
   this.dialogRef.close();
 }
}