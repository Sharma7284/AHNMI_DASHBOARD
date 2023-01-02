import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any[] = []

  baseurl = 'https://datastuntstaging.co.in/ahnmi_lara/storage/app/'

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
}
