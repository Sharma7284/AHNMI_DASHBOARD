import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-pages-blog',
  templateUrl: './pages-blog.component.html',
  styleUrls: ['./pages-blog.component.css']
})
export class PagesBlogComponent implements OnInit {

  blog: any = []
  baseurl = 'https://datastuntstaging.co.in/ahnmi_lara/storage/app/'

  isLoggedIn: boolean = true

  constructor(private authService: AuthenticationService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {

    // let active = localStorage.getItem('active')
    // console.log(active)

    this.authService.authBlog().subscribe(
      (res) => {

        this.blog = res
        console.log(this.blog)

      }
    )
  }

  onClick( slug: any, status:any) {

    console.log(slug)
    console.log(status)

    
    if ( status == 1 && this.isLoggedIn == true ) {
      this.route.navigate(['/pages-full-blog', slug])
    } else {
      this.route.navigate(['/'])
    }
  }
}
