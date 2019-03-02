import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  title = 'Cat';
  breeds: {};
  selectedBreed: {};
  selectedBreedId: any;
  breedImgURL = '';
  constructor(private data: DataService) { }

  ngOnInit() {
    this.fetchCats();
  }

  fetchCats() {
    this.data.fetchCats().subscribe( response => {
      this.breeds = response;
    });
  }

  fetchBreedImage() {
    this.data.fetchCatBreedImage(this.selectedBreedId).subscribe(response => {
      this.breedImgURL = response[0].url;
      this.selectedBreed = response[0].breeds[0];
    });
  }
}
