import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllBreeds() {
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }

  getBreedImage(breed) {
    return this.http.get('https://dog.ceo/api/breed/' + breed + '/images/random');
  }

  getSubBreed(breed) {
    return this.http.get('https://dog.ceo/api/breed/' + breed + '/list');
  }

  getRandomSubBreedImage(breed, subBreed) {
    return this.http.get('https://dog.ceo/api/breed/' + breed + '/' + subBreed + '/images/random');
  }
}
