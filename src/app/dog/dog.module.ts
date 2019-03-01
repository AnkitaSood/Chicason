import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DogComponent } from './dog.component';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule, MatSelectModule, MatCardModule, MatTabsModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    DogComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule, MatSelectModule, MatCardModule, MatTabsModule, MatButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: []
})
export class DogModule { }
