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

  // Access to fetch




  private loggedIn = new BehaviorSubject<boolean>(false)

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    // console.log(this.loggedIn)
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

  authGetMembership() {

    let userToken = localStorage.getItem('token')
    console.log(userToken)

    return this.http.get<any>(this.baseUrl + '/formdata', {
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

  getSubCategories(categoriesId: any) {

    let token = localStorage.getItem('token')

    return this.http.get<any>('https://datastuntstaging.co.in/ahnmi_lara/api/policy-adovcacy/subcategory/' + categoriesId, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  getDocument(doucmentId: any) {
    let token = localStorage.getItem('token')

    return this.http.get<any>('https://datastuntstaging.co.in/ahnmi_lara/api/policy-adovcacy/policy-adovcacy/document-show/' + doucmentId, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  getDocumentFile(file: any) {
    let token = localStorage.getItem('token')

    return this.http.get<any>('https://datastuntstaging.co.in/ahnmi_lara/api/policy-adovcacy/policy-adovcacy/document/' + file, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*'
      }
    })
  }

  pli() {
    let token = localStorage.getItem('token')

    console.log(token)

    return this.http.get<any>('https://datastuntstaging.co.in/ahnmi_lara/api/policy-adovcacy/policy-adovcacy/document/pli-document', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  getToast(data: any) {
    return data;
  }

  // Member Post

  postMember(comment: any, id: any) {

    let token = localStorage.getItem('token')
    console.log(token)

    let member = {
      postmessage: comment, document_id: id
    }
    console.log(member)

    return this.http.post<any>('https://datastuntstaging.co.in/ahnmi_lara/api/memberpost', member, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  postReply(postComment: any, e: any, document_id: any) {
    let token = localStorage.getItem('token')
    console.log(token)

    let reply = {
      post_comment: postComment, post_comment_image: '', post_id: e, document_id: document_id
    }

    return this.http.post<any>('https://datastuntstaging.co.in/ahnmi_lara/api/post-comment', reply, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  getMemberPost(id: any) {

    let token = localStorage.getItem('token')

    return this.http.get<any>('https://datastuntstaging.co.in/ahnmi_lara/api/memberpost/view/' + id, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  // Stripe Payment
  createPayment(data: any) {

    let token = localStorage.getItem('token')

    return this.http.post<any>('https://datastuntstaging.co.in/ahnmi_lara/api/stripepayment', data, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  // Recent Document GET APIs
  getRecentDocument() {

    let token = localStorage.getItem('token')

    return this.http.get<any>(this.baseUrl + '/recent-docs', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }

  // Gmail Verfication
  postGmailVerify( register_token : any ) {

    // let token = localStorage.getItem('token')

    return this.http.post<any>(this.baseUrl + '/email/verification-notification',register_token, {
      headers: {
        'Authorization': 'Bearer ' + register_token
      }
    })
  }

}