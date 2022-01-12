import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute!: string;
  title!: string;
  name!: string;

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams
    .subscribe(params =>{
      console.log(params);
    })
  }

  displaySecondComponent(){
    this.router.navigate(['/second-component'], {queryParams: {title: 'secondcomponent', name: 'secondpage'}})
  }

  logQueryParams(){}
}
