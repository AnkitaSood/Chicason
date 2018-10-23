import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router) {}

  title = 'Chicason';
  mainMenuItems: any[] = [];
  // activeMenuItem$: any;

  ngOnInit(): void {
    // this.mainMenuItems.push({title: 'Home', path: 'home', icon: 'home'});
    // this.mainMenuItems.push({title: 'Link 2', path: 'link'});
    // this.mainMenuItems.push({title: 'Link 3'});

    this._router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd ) {
        // console.log(event.url.replace(/^\//, ''));

        // this.activeMenuItem$ = of(this.mainMenuItems.filter(item => item.path === event.url.replace(/^\//, ''))[0]);

      }
    });


  }

}
