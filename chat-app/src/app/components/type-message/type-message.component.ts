import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-message',
  templateUrl: './type-message.component.html',
  styleUrls: ['./type-message.component.scss']
})
export class TypeMessageComponent implements OnInit {
    message!: string;

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
  }
  // message
  // handleSumbit
  send() {
  }

  handSubmit(event: { keyCode: number; }) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
