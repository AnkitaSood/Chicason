import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SideNavComponent} from './side-nav.component';
import {RouterModule} from '@angular/router';
import {MatMenuModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {MenuDataService} from './menu-data.service';

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    SideNavComponent
  ],
  providers: [
    MenuDataService
  ]
})
export class SideNavModule { }
