import { ChatDataService } from 'src/app/services/chat-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() data: any;
    
  constructor( private chatData: ChatDataService ) { 
    
  }

  ngOnInit() {
    this.data.subscribe((chatInfo: any) => {
      this.data = chatInfo;
    });
  }
}
