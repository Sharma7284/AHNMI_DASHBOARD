import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  file = 4;

  constructor(private elementRef: ElementRef, private service: AuthenticationService) { }

  ngOnInit(): void {

    this.service.getCategories().subscribe(
      (res) => {

        // this.file = res
        console.log(this.file)
        console.log('hi')
      }
    )

    
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

  }

  // categories(){
  //   this.service.getCategories
  // }


}
