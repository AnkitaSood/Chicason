import {AnimalSelections} from '../animal.component';
import * as fromRoot from '../../state/app.state';
import {AnimalsActions, AnimalsActionTypes} from './animals.actions';

export interface AnimalState extends fromRoot.AppState {
  animal: String;
  dog: AnimalSelections;
  cat: AnimalSelections;
}

const initialState: AnimalState = {
  animal: 'dog',
  dog: {
    selectedBreed: null,
    selectedBreedId: '',
    breedImgURL: ''
  },
  cat: {
    selectedBreed: null,
    selectedBreedId: '',
    breedImgURL: ''
  }
};

/*const getAnimalState = createFeatureSelector<AnimalState>('animals');

export const getAnimal = createSelector(
  getAnimalState,
  state => state.animal
);*/

export function reducer(state = initialState, action: AnimalsActions): AnimalState {
  
  switch (action.type) {

    case AnimalsActionTypes.SelectCat:
      return {
        ...state,
        cat : action.payload
      };
    case AnimalsActionTypes.SelectDog:
    return {
      ...state,
      dog : action.payload
    };
    case AnimalsActionTypes.SelectCurrentAnimal:
      return {
        ...state,
        animal: action.payload
      };
    default: return state;
  }
  
}
