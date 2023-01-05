import { Component, ComponentFactoryResolver, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { filter, map, Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // public sidebarInstance : SidebarComponent | undefined 

  title = 'admindashboard';

  navigationEvents$: Observable<NavigationEnd> | undefined;
  canShowComponent$: Observable<boolean> | undefined;

  public url: any
  private conditions: any

  constructor(
    private elementRef: ElementRef,
    public _router: Router,
    private authService: AuthenticationService,
    private activeRoute: ActivatedRoute,
    private component: ComponentFactoryResolver
  ) {


    _router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.url = event.url
          // console.log(this.urlValue)
        }
      }
    )



  }

  ngOnInit() {

    // window.addEventListener('blur', ()=>{
    //   window.document.title = "Where are you go ! I'm Here 😌"
    // })
    // window.addEventListener('focus', ()=>{
    //   window.document.title = 'AHNMI - Dashboard'
    // })

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    // Dynamic Routing
    this.navigationEvents$ = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd)
    );

    this.canShowComponent$ = this.navigationEvents$.pipe(
      map(event => this.shouldShowComponent(event.url))
    )

    // console.log(this.url)

    // console.log(document.querySelector('div[id="reportsChart"]'))


  }

  // onCreated(){
  //   if(this.sidebarInstance?.element.classList.contains('/')){
  //     this.sidebarInstance.element.classList.remove('/')
  //     this.checkUrl()
  //   }
  // }
  // checkUrl() {

  //   (!this.urlValue || this.urlValue !== '/')?this.sidebarInstance?.hide() : this.sidebarInstance?.show()
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
        return true;
      default: return false
    }

    // if (!url) {
    //   return false;
    // }
    // const conditions = [
    //   !url.startsWith('/pages-full-blog'),
    //   !url.startsWith('/pages-blog'),
    //   !url.startsWith('/pages-login'),
    //   !url.startsWith('/')
    // ]
    // return conditions.some(isTure => isTure)
  }
}
