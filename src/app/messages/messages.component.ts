import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Messages</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div *ngIf="!service.messages.length">
        No Messages!
      </div>
      <div *ngIf="service.messages.length">
        <div *ngFor='let message of service.messages'> {{message}} </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="service.clear()">Clear</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class MessagesContent {
  @Input() name; // not used
  @Input() service;

  constructor(
    public activeModal: NgbActiveModal,
  ) {}
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  constructor(
    private modalService: NgbModal,
    public messageService: MessageService
   ) {}

  open() {
    const modalRef = this.modalService.open(MessagesContent);
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.service = this.messageService;
  }
}