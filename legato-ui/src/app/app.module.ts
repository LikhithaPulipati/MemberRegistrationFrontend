import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {AuthorModule} from '../author/author.module';
import { HomeModule } from 'src/home/home.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { DemoComponent } from 'src/components/demo/demo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UpdateComponent } from './update/update.component';

const routes:Routes = [
  
  { path: "login", component: LoginComponent},
  { path: "logout", component: LogoutComponent},
  { path: "signup", component: SignupComponent},
  { path: "update", component: UpdateComponent},
  {path:"demo",component:DemoComponent},
  
  { path: "author", loadChildren: () => import("../author/author.module").then(m=>m.AuthorModule) },
   { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    
    AuthorModule,
    HomeModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
