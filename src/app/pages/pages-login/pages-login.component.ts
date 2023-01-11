import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  public loginForm !: FormGroup
  loggedIn: any = 0
  error: boolean = false
  isLoading: boolean = false
  loading: boolean = false

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // this.authService.authDetails().subscribe(
    //   (res) => {
    //     console.log(res)
    //   }
    // )
  }

  onLogin(loginForm: FormGroup) {

    this.isLoading = true
    this.loading = true

    document.getElementById('loginbtn')?.classList.add('hide')

    this.authService.authLogin(this.loginForm.value).subscribe(
      (res) => {

        // this.isLoading = false
        this.loading = false

        const token = res.success.token
        this.loggedIn = 1

        document.getElementById('loginbtn')?.classList.remove('hide')

        console.log(token)

        localStorage.setItem('token', token)
        localStorage.setItem('active', this.loggedIn)

        this.route.navigate(['/dashboard'])
      }, (error) => {

        // this.isLoading = false
        this.error = true
        this.loading = false

        document.getElementById('loginBtn')?.classList.remove('hide')

      }
    )


  }

}
