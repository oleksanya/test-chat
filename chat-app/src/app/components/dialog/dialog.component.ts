import { ChatDataService } from './../../services/chat-data.service';
import { ChatService } from './../../services/chat.service';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {
  @Input() chatData: any;

  @Output() dialogClicked = new EventEmitter<any>()

  contactPerson = 'CONSOLE DOt LOGE';
  lastMessage: any;


  constructor(
    private readonly db: DatabaseService
  ) { }

  ngOnInit(): void {
    this.db.getThreadData(this.chatData.id).then(data => {
      if (data.length !== 0) {
        this.lastMessage = data[data.length - 1];
        this.lastMessage.created = new Date(this.lastMessage.created.seconds * 1000);
      }
    });
  }


  clickDialog() {
    this.dialogClicked.emit(this.chatData);
  }
}
