import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  premiumUser = false;
  userType: String = '';

  constructor() { }

  ngOnInit() {
  }

  upgradeProfile() {

    this.premiumUser = true;
    this.userType = 'Premium';
  }
}
