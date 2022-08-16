import { ModalComponent } from './modal/modal.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalSerivice: BsModalService) {}

  showConfirm(
    title: string,
    message: string,
    cancel?: string,
    confirm?: string
  ) {
    const bsModalRef: BsModalRef = this.modalSerivice.show(ModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.message = message;

    if (cancel) {
      bsModalRef.content.cancel = cancel;
    }
    if (confirm) {
      bsModalRef.content.confirm = confirm;
    }

    return (<ModalComponent>bsModalRef.content).confirmResult;
  }
}
