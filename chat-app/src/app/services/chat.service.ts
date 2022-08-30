
import { AuthService } from './auth.service';
import { MessageComponent } from './../components/message/message.component';

import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'

import { DialogMessage } from '../components/models/dialog-message.model';
import { User } from './../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any;
  dialogMessages!: AngularFireList<DialogMessage[]>;
  dialogMessage!: DialogMessage;
  userName!: Observable<string>;

  constructor(
    private db: AngularFireDatabaseModule,
    private afAuth: AngularFireAuthModule
  ) {

  }

  sendMessage() {

  }
  
}
