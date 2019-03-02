import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchDogs() {
    return this.http.get('https://api.TheDogAPI.com/v1/breeds', {headers: {'x-api-key': 'c9f15cec-8894-45af-9dfd-bc2eeb6cbdaf'}});
  }

  fetchDogBreedImage(breedId) {
    return this.http.get('https://api.TheDogAPI.com/v1/images/search?breed_ids=' + breedId + '&limit=1', {headers: {'x-api-key': 'c9f15cec-8894-45af-9dfd-bc2eeb6cbdaf'}});
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
