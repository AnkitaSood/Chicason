import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalComponent } from './animal.component';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule, MatSelectModule, MatCardModule, MatTabsModule, MatButtonModule } from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/animals.reducer';

@NgModule({
  declarations: [
    AnimalComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    StoreModule.forFeature('animals', reducer)
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    AnimalComponent
  ],
  providers: []
})
export class AnimalModule { }
