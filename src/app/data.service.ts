import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  catAPIKey = '5f267a1e-26fa-4a93-96ef-e7d214f9d5f6';
  dogAPIkey = 'c9f15cec-8894-45af-9dfd-bc2eeb6cbdaf';

  constructor(private http: HttpClient) {
  }

  fetchDogs() {
    return this.http.get('https://api.thedogapi.com/v1/breeds', {headers: {'x-api-key': this.dogAPIkey}});
  }

  fetchDogBreedImage(breedId) {
    return this.http.get('https://api.thedogapi.com/v1/images/search?breed_ids=' + breedId + '&limit=1',
      {headers: {'x-api-key': this.dogAPIkey}});
  }

  fetchCats() {
    return this.http.get('https://api.thecatapi.com/v1/breeds', {headers: {'x-api-key': this.catAPIKey}});
  }

  fetchCatBreedImage(breedId) {
    return this.http.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId + '&limit=1',
      {headers: {'x-api-key': this.catAPIKey}});
  }
}
