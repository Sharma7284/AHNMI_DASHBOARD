import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-pages-membership-form',
  templateUrl: './pages-membership-form.component.html',
  styleUrls: ['./pages-membership-form.component.css']
})
export class PagesMembershipFormComponent implements OnInit {

  public membershipForm !: FormGroup

  selectedIndex: number
  tabs: any = []
  arrayTabs: any

  constructor(private http: HttpClient, private authService: AuthenticationService, private route: Router, private formBuilder: FormBuilder) {
    this.selectedIndex = 0;
  }

  ngOnInit(): void {
    this.tabs = document.querySelectorAll('#myTabContent > div')
    this.membershipForm = this.formBuilder.group({
      Name_of_Organization: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      PinCode: ['', Validators.required],
      Telephone: ['', Validators.required],
      Fax: ['', Validators.required],
      Website: ['', Validators.required],
      Designation: [''],
      Direct_Phone: [''],
      Organization_Head_in_India: [''],
      Mobile: [''],
      Email_id: [''],
      Name_Mr_Ms: [''],
      Designation_2: [''],
      Direct_Phone_2: [''],
      Mobile_2: [''],
      Email_id_2: [''],
      name: [''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],
      // Organization_Head_in_India :[''],

    })
  }

  onMembership(membershipForm: FormGroup) {

    this.authService.authMembership(this.membershipForm.value).subscribe(
      (res) => {
        console.log(res)
        // this.route.navigate(['/dashboard'])
        // window.location.href = "https://www.datastuntstaging.co.in"
      }
    )
  }

  selectTab(e: any) {
    console.log(e)
  }


  next(e: any) {


    let var1 = document.querySelectorAll('#myTab > li')
    let currentIndex = 0

  }

  event(e : any){

    
  }

}
