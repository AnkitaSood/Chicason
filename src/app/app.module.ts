import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SideNavModule} from './side-nav/side-nav.module';
import {HomeModule} from './home/home.module';

const appRoutes = [
  {path: 'home', component: HomeComponent},
  {path: 'link', component: HomeComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    SideNavModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
