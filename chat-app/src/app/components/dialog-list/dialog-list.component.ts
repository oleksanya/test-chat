import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { Component, OnInit } from '@angular/core';
import { ChatDataService } from 'src/app/services/chat-data.service';

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss']
})
export class DialogListComponent implements OnInit {
  allUsers: any | undefined;

  constructor(private dbService: DatabaseService,
    private chatData: ChatDataService) { }

  async ngOnInit(): Promise<any> {
    this.allUsers = await this.getUsers();
  }

  async getUsers() {
    return await this.dbService.getAllUsers();
  }

  catchEvent(ev: any): void {
    this.chatData.onDataReceived(ev);
  }

}
