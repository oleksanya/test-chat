import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collectionGroup, query, where, getDocs, collection } from "firebase/firestore";  
import { doc, getDoc } from "firebase/firestore";

export interface Message {
  message?: string;
  time?: string;
  date?: string;

}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  collectionUsersRef: any;
  collectionUsers: any;
  threadArr: any;
  userArr: any;
  constructor(private db: AngularFirestore) { 

  }

  getAllUsers() {
    return new Promise<any>((resolve)=> {
      this.db.collection('User')
        .valueChanges({ idField: 'id' })
        .subscribe(users => resolve(users));
    })
  }

  getUsersId() {
    this.userArr = new Promise<any>((resolve)=> {
      this.db.collection('User')
        .valueChanges({ idField: 'id' })
        .subscribe((dialogs: any) => resolve(dialogs));
    });
    return this.userArr;
  }

  getThreadId(idDocUser: any) {
    this.threadArr = new Promise<any>((resolve)=> {
      this.db.collection('User')
        .doc(idDocUser)
        .collection("thread")
        .valueChanges({ idField: 'threadCollection' })
        .subscribe((threads: any) => resolve(threads));
    });

    return this.threadArr;
  }


  getThreadData(idDocUser: any) {
    return new Promise<any>((resolve)=> {
      this.db.collection('User')
        .doc(idDocUser)
        .collection("thread")
        .valueChanges({ idField: 'threadId' })
        .subscribe(dialogs => resolve(dialogs));
    })
  }

}
