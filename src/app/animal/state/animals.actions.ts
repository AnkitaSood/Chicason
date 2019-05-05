import {Action} from '@ngrx/store';
import {AnimalSelections} from '../animal.component';

export enum AnimalsActionTypes {
  SelectCat = '[Animals] SELECTED_CAT',
  SelectDog = '[Animals] SELECTED_DOG',
  SelectCurrentAnimal = '[Animals] CURRENT_ANIMAL'
}

export class SelectCat implements Action {
  readonly type = AnimalsActionTypes.SelectCat;

  constructor(public payload: AnimalSelections) {}
}

export class SelectDog implements Action {
  readonly type = AnimalsActionTypes.SelectDog;

  constructor(public payload: AnimalSelections) {}
}

export class SelectCurrentAnimal implements Action {
  readonly type = AnimalsActionTypes.SelectCurrentAnimal;

  constructor(public payload: String) {}
}

export type AnimalsActions = SelectCat | SelectDog | SelectCurrentAnimal;
