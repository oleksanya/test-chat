import { DatabaseService } from 'src/app/services/database.service';
import { ChatDataService } from './../../services/chat-data.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnInit {
  allUsers: any;
  dialogData: any;
  dialog: any;
  userData:any;
  userId: any;
  idDocUser: any;
  idDocThread: any;
  threadIdsArray: any;
  chatsData: any;

  public dataObsevable: BehaviorSubject<any> = new BehaviorSubject<any>({});

  data = this.chatData.dataObservable$;

  constructor( private chatData: ChatDataService,
    private dbService: DatabaseService
    ) { 
  }

  ngOnInit() {
  this.getDialog();
  }

  async getUsers() {
    this.allUsers = await this.dbService.getAllUsers();
  }

  async getDialog() {
    this.userData = await this.dbService.getUsersId();
    this.userId = this.userData
      .map((userIdObject: { id: string; }) => userIdObject.id);

    this.idDocUser = await this.userId.forEach(async (id: string) => {
      await this.dbService.getThreadData(id)
      .then(data => {}); 
    });

    this.userId.forEach((id: string, index: number) => { 
      this.dbService.getThreadId(id)
        .then((data: any) => {
          this.threadIdsArray = data.map((threadIdObject: { threadCollection: string; }) => 
            threadIdObject.threadCollection
          );
      });
    });

    this.dialogData = await this.dbService.getThreadData(this.idDocUser);
  }
  
}
