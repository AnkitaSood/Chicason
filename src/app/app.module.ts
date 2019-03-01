import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {DogComponent} from './dog/dog.component';
import {DogModule} from './dog/dog.module';
import {CatComponent} from './cat/cat.component';
import {CatModule} from './cat/cat.module';
import {FooterComponent} from './footer/footer.component';


import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';

const appRoutes = [
  {path: 'dog', component: DogComponent},
  {path: 'cat', component: CatComponent},
  {path: '**', redirectTo: 'dog'},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    DogModule,
    CatModule,
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
