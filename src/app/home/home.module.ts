import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule, MatSelectModule, MatCardModule, MatTabsModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule, MatSelectModule, MatCardModule, MatTabsModule, MatButtonModule
  ],
  providers: []
})
export class HomeModule { }
