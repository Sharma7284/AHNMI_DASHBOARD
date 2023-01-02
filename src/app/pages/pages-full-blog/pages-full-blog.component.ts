import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-pages-full-blog',
  templateUrl: './pages-full-blog.component.html',
  styleUrls: ['./pages-full-blog.component.css']
})
export class PagesFullBlogComponent implements OnInit {

  @ViewChild('sidebar')
  // public sidebarInstance: SidebarComponent

  public urlValue: string = '';
  public newUrl: string = '';

  blogData: any
  baseurl = 'https://datastuntstaging.co.in/ahnmi_lara/storage/app/'

  constructor(private authService: AuthenticationService, private http: HttpClient, private route: Router, private activeRoute: ActivatedRoute) {


  }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(res => {
      let slug = res.get('id')
      // console.log(slug)
      this.authService.authBlogDetails(slug).subscribe(res => {
        this.blogData = res
        console.log(this.blogData)
      })
    })

    // console.log(document.getElementById('footer'))
    let footer = document.getElementById('footer')?.className;


  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


}
