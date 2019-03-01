import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class MenuDataService {

  getMenuData(): Observable<any[]> {

    const mainMenuItems: any[] = [];

    mainMenuItems.push({title: 'Dog', path: 'dog', icon: 'dog'});
    mainMenuItems.push({title: 'Cat', path: 'cat'});

    return of(mainMenuItems);

  }

}
