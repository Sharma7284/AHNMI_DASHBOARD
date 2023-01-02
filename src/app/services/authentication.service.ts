import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForLogin, UserForMembership, UserForRegister } from '../models/user'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  baseUrl: string = "https://www.datastuntstaging.co.in/ahnmi_lara/api";
  userToken: any
  token: any
  CheckBlog: any

  private loggedIn = new BehaviorSubject<boolean>(false)

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    console.log(this.loggedIn)
  }

  // Login API
  authLogin(userlogin: UserForLogin) {
    this.loggedIn.next(true)
    // console.log(this.loggedIn)
    return this.http.post<any>(this.baseUrl + '/login', userlogin);
  }

  // Auth Blog
  authBlog() {
    let userToken = localStorage.getItem('token')
    console.log(userToken)

    return this.http.get<any>(this.baseUrl + '/blog', {
      headers: {
        'Authorization': 'Bearer ' + userToken
      }
    });
  }

  // Register API
  authRegister(userRegister: UserForRegister) {
    return this.http.post<any>(this.baseUrl + '/register', userRegister)
  }

  // Auth Details API
  authDetails() {
    return this.http.get<any>(this.baseUrl + '/details')
  }

  // Auth Membership API
  authMembership(userMember: UserForMembership) {

    let userToken = localStorage.getItem('token')
    console.log(userToken)

    return this.http.post<any>(this.baseUrl + '/membership-form', userMember, {
      headers: {
        'Authorization': 'Bearer ' + userToken
      }
    })
  }

  // Auth Logout
  authLogout() {
    this.loggedIn.next(false)
    localStorage.clear()
    this.router.navigate(['/']);
    console.log(this.loggedIn)
  }

  // Auth Blog Details API
  authBlogDetails(slug: any) {
    console.log(slug)
    return this.http.get<any>('https://datastuntstaging.co.in/ahnmi_lara/api/blog/' + slug)
  }

  getCategories() {

    let token = localStorage.getItem('token')

    return this.http.get<any>('https://datastuntstaging.co.in/ahnmi_lara/api/adovcacypolicy', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  getDocument( file : any ) {
    let token = localStorage.getItem('token')

    return this.http.get<any>('https://datastuntstaging.co.in/ahnmi_lara/api/policy-adovcacy/policy-adovcacy/document-show/' + file,{
      headers:{
        'Authorization': 'Bearer ' + token
      }
    })
  }

  getToast( data : any ){
    return data;
  }
}