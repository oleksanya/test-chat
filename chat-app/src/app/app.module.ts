import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
