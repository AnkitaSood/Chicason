import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';

export interface Breed {
  id: String;
  name: String;
  temperament: String;
  life_span: String;
  alt_names: String;
  wikipedia_url: String;
}

export interface AnimalSelections {
  selectedBreed: Breed;
  selectedBreedId: '';
  breedImgURL: '';
}

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})

export class AnimalComponent implements OnInit {
  animal: String;
  title: String;
  breeds: Breed[];
  dog: AnimalSelections = {
    selectedBreed: null,
    selectedBreedId: '',
    breedImgURL: ''
  };
  cat: AnimalSelections = {
    selectedBreed: null,
    selectedBreedId: '',
    breedImgURL: ''
  };

  get getBaseObj() {
    if (this.animal.toLowerCase() === 'cat') {
      return this.cat;
    }
    // else
    return this.dog;
  }
  get selectedBreed(): Breed {
    return this.getBaseObj.selectedBreed;
  }
  set selectedBreed(val: Breed) {
    this.getBaseObj.selectedBreed = val;
  }

  get selectedBreedId() {
    return this.getBaseObj.selectedBreedId;
  }
  set selectedBreedId(val) {
    this.getBaseObj.selectedBreedId = val;
  }

  get breedImgURL() {
    return this.getBaseObj.breedImgURL;
  }
  set breedImgURL(val) {
    this.getBaseObj.breedImgURL = val;
  }

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router, private store: Store<any>) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.animal = this.route.snapshot.paramMap.get('animal');
    this.store.dispatch({
      type: 'CURRENT_ANIMAL',
      payload: this.animal
    });
    this.fetchBreeds();

    this.store.pipe(select('animals')).subscribe(
      animals => {
            this.selectedBreed =  animals[this.animal.toLowerCase()].selectedBreed;
            this.selectedBreedId =  animals[this.animal.toLowerCase()].selectedBreedId;
            this.breedImgURL = animals[this.animal.toLowerCase()].breedImgURL;
      }
    ).unsubscribe();

  }

  // List of breeds displayed in select
  fetchBreeds() {
    let animalObservable$;
    switch (this.animal) {
      case 'dog':
        this.title = 'Dog';
        animalObservable$ = this.data.fetchDogs();
        break;

      case 'cat':
        this.title = 'Cat';
        animalObservable$ = this.data.fetchCats();
        break;
    }

    animalObservable$.subscribe(response => {
      this.breeds = response;
    }, error => {
      console.log('error');
    });

  }

  // Fetch selected breed image
  fetchAnimalBreedImage() {
    let animalImgObservable$;
    switch (this.animal) {
      case 'dog':
        animalImgObservable$ = this.data.fetchDogBreedImage(this.selectedBreedId);
        break;

      case 'cat':
        animalImgObservable$ = this.data.fetchCatBreedImage(this.selectedBreedId);
        break;
    }

    animalImgObservable$.subscribe(response => {
      this.breedImgURL = response[0].url;
      this.selectedBreed = response[0].breeds[0];
      if (this.animal === 'cat') {
        this.store.dispatch({
          type: 'SELECTED_CAT',
          payload: this.getBaseObj
        });
      } else {
        this.store.dispatch({
          type: 'SELECTED_DOG',
          payload: this.getBaseObj
        });
      }

    });

  }

}
