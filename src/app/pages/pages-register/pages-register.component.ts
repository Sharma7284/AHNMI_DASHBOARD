import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-pages-register',
  templateUrl: './pages-register.component.html',
  styleUrls: ['./pages-register.component.css']
})
export class PagesRegisterComponent implements OnInit {

  public registerForm !: FormGroup
  isLoading: boolean = false

  constructor(private authService: AuthenticationService, private fromBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {

    this.registerForm = this.fromBuilder.group({
      name: (['', Validators.required]),
      email: (['', Validators.required]),
      password: (['', Validators.required]),
      c_password: (['', Validators.required])
    })

  }

  onRegister(registerForm: FormGroup) {

    this.isLoading = true

    this.authService.authRegister(this.registerForm.value).subscribe(
      (res) => {
        this.isLoading = false
        console.log(res)

        
        this.route.navigate(['/'])

      },
      (error) => {
        this.isLoading = false
      }
    )


  }

}
