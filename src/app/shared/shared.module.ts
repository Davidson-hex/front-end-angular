import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AlertModalComponent, ModalComponent],
  imports: [CommonModule],
  exports: [AlertModalComponent],
  entryComponents: [AlertModalComponent, ModalComponent],
})
export class SharedModule {}
