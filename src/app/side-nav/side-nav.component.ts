import {Component, OnInit} from '@angular/core';
import {MenuDataService} from './menu-data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements OnInit {

  mainMenuItems: any[] = [];

  constructor(private _menuDataService: MenuDataService) {}

  ngOnInit(): void {

    this._menuDataService.getMenuData().subscribe(res => {
      this.mainMenuItems = res;
    });

  }

}
