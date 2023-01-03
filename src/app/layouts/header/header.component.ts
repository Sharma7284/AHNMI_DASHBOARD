import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public url: any

  constructor(@Inject(DOCUMENT) private document: Document, private route : Router, private authService : AuthenticationService) { }

  ngOnInit(): void {
  }

  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }



  Onlogout(){

    this.authService.authLogout()

    // localStorage.clear();
    // this.route.navigate(['/']).then(()=>{
    //   window.location.reload()
    // })

  }

  shouldShowComponent(url: string): boolean {
    switch (true) {
      case /\/dashboard/.test(url):
      case /\/pages-membership-form/.test(url):
      case /\/pages-regulatory/.test(url):
      case /\/user-profile/.test(url):
      case /\/pages-contact/.test(url):
      case /\/pages-faq/.test(url):
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

  backtohome(){
    // this.route.navigate(['/dashboard']).then(()=>{
    //   window.location.reload();
    // })
  }
}
