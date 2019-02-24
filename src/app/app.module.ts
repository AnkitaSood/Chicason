import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeModule} from './home/home.module';
import {MenuComponent} from './menu/menu.component';

import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {FooterComponent} from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes = [
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HomeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
