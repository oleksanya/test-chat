import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChatWrapperComponent } from './components/chat-wrapper/chat-wrapper.component';
import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthGuard } from './guard/auth.guard';

export const appRoutes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'chat', component: ChatWrapperComponent ,canActivate: [AuthGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
];