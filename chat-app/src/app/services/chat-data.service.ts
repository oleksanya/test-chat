import { DatabaseService } from 'src/app/services/database.service';
import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ChatDataService {
  allUsers: any;
  
  public dataObservable = new BehaviorSubject<any>(null);
  public dataObservable$ = this.dataObservable.asObservable();

  public dialogObservable = new BehaviorSubject<any>(null);
  public dialogObservable$ = this.dataObservable.asObservable();


  constructor(private dbService: DatabaseService) { }


  onDataReceived = (chatData: any) => this.dataObservable.next(chatData);

  onDialogReceived = (dialog: any) => this.dataObservable.next(dialog);

}
