import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  file = 4;
  membershipActive: boolean = true

  url: any;

  constructor(private elementRef: ElementRef, private _router: Router, private service: AuthenticationService) {
    _router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.url = event.url
          // console.log(this.urlValue)
        }
      }
    )
  }

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

  shouldShowComponent(url: string): boolean {
    switch (true) {
      case /\/dashboard/.test(url):
      case /\/membership-form/.test(url):
      case /\/pages-regulatory/.test(url):
      case /\/user-profile/.test(url):
      case /\/pages-contact/.test(url):
      case /\/pages-faq/.test(url):
      case /\/policy-adovcacy/.test(url):
      case /\/regulaltory-support/.test(url):
      case /\/schemes-&-subsidies/.test(url):
      case /\/our-services/.test(url):
      case /\/view-policy-adovcacy/.test(url):
      case /\/check/.test(url):
      case /\/stripe/.test(url):
        return true;
      default: return false
    }


  }

  route(link : any) {
    this._router.navigate(['/' + link + ''])
  }
}
