import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  currentRoute!: string;

  constructor(private router: Router){}

  displaySecondComponent(){
    this.router.navigate(['/second-component'], {queryParams: {title: 'secondcomponent'}})
  }

  logQueryParams(){}
}
