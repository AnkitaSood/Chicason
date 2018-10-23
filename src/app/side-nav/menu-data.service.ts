import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class MenuDataService {

  getMenuData(): Observable<any[]> {

    const mainMenuItems: any[] = [];

    mainMenuItems.push({title: 'Home', path: 'home', icon: 'home'});
    mainMenuItems.push({title: 'Link 2', path: 'link'});
    mainMenuItems.push({title: 'Link 3'});

    return of(mainMenuItems);

  }

}
