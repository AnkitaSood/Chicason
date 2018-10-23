import {NgModule} from '@angular/core';
import {SideNavComponent} from './side-nav.component';
import {RouterModule} from '@angular/router';
import {MatIconModule, MatListModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {MenuDataService} from './menu-data.service';

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    SideNavComponent
  ],
  providers: [
    MenuDataService
  ]
})
export class SideNavModule { }
