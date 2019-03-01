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

  fetchCats() {
    return this.http.get('https://api.thecatapi.com/v1/breeds', {headers: {'x-api-key': '5f267a1e-26fa-4a93-96ef-e7d214f9d5f6'}});
  }

  fetchCatBreedImage(breedId) {
    return this.http.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId + '&limit=1', {headers: {'x-api-key': '5f267a1e-26fa-4a93-96ef-e7d214f9d5f6'}});
  }

  fetchImageCategories() {
    return this.http.get('https://api.thedogapi.com/v1/categories', {headers: {'x-api-key': 'c9f15cec-8894-45af-9dfd-bc2eeb6cbdaf'}});
  }
}
