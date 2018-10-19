import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Chicason';

  mainMenuItems: any[] = [];

  ngOnInit(): void {
    this.mainMenuItems.push({title: 'Home', path: 'home', icon: 'home'});
    this.mainMenuItems.push({title: 'Link 2'});
    this.mainMenuItems.push({title: 'Link 3'});
  }

}
