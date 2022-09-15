import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService, Message } from 'src/app/services/database.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  
  message!: string;

  constructor( private db: DatabaseService
    ) { 

    }

  ngOnInit(): void {
  }

}

