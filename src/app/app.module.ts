import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {AnimalModule} from './animal/animal.module';
import {FooterComponent} from './footer/footer.component';

import {StoreModule} from '@ngrx/store';

import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { reducers, metaReducers } from './reducers';
import {AnimalComponent} from './animal/animal.component';

const appRoutes = [
  {path: 'animal/:animal', component: AnimalComponent},
  {path: '**', redirectTo: 'animal/dog'},
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
    AnimalModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    HttpClientModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
