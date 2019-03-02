import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements  OnInit {

  title = 'Dog';
  breeds: {};
  selectedBreed: {};
  selectedBreedId: any;
  breedImgURL = '';

  constructor (private data: DataService) {}

  ngOnInit(): void {
    this.fetchDogs();
  }

  // List of breeds displayed in select
  fetchDogs() {
    this.data.fetchDogs().subscribe(response => {
      this.breeds = response;
      }, error => {
        console.log('error');
      });
  }

  /* Fetch selected breed image*/
  fetchDogBreedImage() {
    this.data.fetchDogBreedImage(this.selectedBreedId).subscribe (response => {
      this.breedImgURL = response[0].url;
      this.selectedBreed = response[0].breeds[0];
    });

  }

}

