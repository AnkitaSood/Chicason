import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatTabsModule} from '@angular/material';
import {CatComponent} from './cat.component';

@NgModule({
  declarations: [
    CatComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule, MatSelectModule, MatCardModule, MatTabsModule, MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})

export class CatModule { }
