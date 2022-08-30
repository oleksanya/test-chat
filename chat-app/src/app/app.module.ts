
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TypeMessageComponent } from './components/type-message/type-message.component';
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component';
import { DialogListComponent } from './components/dialog-list/dialog-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { environment } from '../environments/environment';
import { ChatWrapperComponent } from './components/chat-wrapper/chat-wrapper.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchBarComponent,
    ProfileComponent,
    DialogComponent,
    TypeMessageComponent,
    SidebarHeaderComponent,
    DialogListComponent,
    ChatComponent,
    MessageComponent,
    LoginFormComponent,
    ChatWrapperComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule

  ],
  providers: [AuthService,
              ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
