import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() cancel = 'cancelar';
  @Input() confirm = 'confirmar';

  confirmResult!: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    this.confirmResult = new Subject();
  }

  onClose() {
    this.confirmAndClose(false);
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }
}
