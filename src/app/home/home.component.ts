import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {

  title = 'Chicason';
  breeds: any[];
  selectedBreed = '';
  selectedSubBreed = '';
  subBreeds: any[];
  breedImgURL = '';
  subBreedImgURL = '';

  constructor (private data: DataService) {}

  ngOnInit(): void {
    this.getAllBreeds();
  }

  // List of breeds displayed in select
  getAllBreeds() {
    this.data.getAllBreeds().subscribe(response => {
        // @ts-ignore
      this.breeds = Object.keys(response.message);
      }, error => {
        console.log('error');
      });
  }

  // Display sub breed as tabs if they exist
  getSubBreed() {
    this.data.getSubBreed(this.selectedBreed).subscribe(response => {
      // @ts-ignore
      this.subBreeds = response.message;
      // If there are sub-breeds, display their names and a random image for each
      if (this.subBreeds.length !== 0) {
        this.selectedSubBreed = this.subBreeds[0];
        this.getRandomSubBreedImage();
      }
    });
  }

  /* Get main breed image, and get sub-breed list */
  getBreedImage() {
    this.data.getBreedImage(this.selectedBreed).subscribe (response => {
      // @ts-ignore
      this.breedImgURL = response.message;
    }, error => {
      console.log('error');
    },
      () => {
      this.getSubBreed();
      });

  }

  selectedTab(subBreedTab) {
    this.selectedSubBreed = subBreedTab.tab.textLabel;
    this.getRandomSubBreedImage();
  }

  getRandomSubBreedImage() {
    this.data.getRandomSubBreedImage(this.selectedBreed, this.selectedSubBreed).subscribe(response => {
      // @ts-ignore
      this.subBreedImgURL = response.message;
    });
  }
}

