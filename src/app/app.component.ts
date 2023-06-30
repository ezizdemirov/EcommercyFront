import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecommercyfront';
  dt: boolean = true;

  constructor() {
    let pathName = window.location.pathname.split('/')[1];
    if (pathName == "admin") {
      this.dt=false
    }else{
      this.dt = true
    }
  }

  ngOnInit(): void {

  }
}
