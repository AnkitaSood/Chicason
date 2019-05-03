import {AnimalSelections} from '../animal.component';

export interface AnimalState {
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

export function reducer(state = initialState, action): AnimalState {
  
  switch (action.type) {

    case 'SELECTED_CAT':
      return {
        ...state,
        cat : action.payload
      };
    case 'SELECTED_DOG':
    return {
      ...state,
      dog : action.payload
    };
    case 'CURRENT_ANIMAL':
      return {
        ...state,
        animal: action.payload
      };
    default: return state;
  }
  
}
