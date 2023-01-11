import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  membershipForm : any

  // 
  member : boolean = false
  // 

  membered = [
    { title : 'Download Certificate'},
    { title : 'Download Invoice'},
    { title : 'Make Payment'},
    { title : 'Request Hardcopy'},
  ]

  corporateDetails: any;
  contactDetails: any;
  businessDetails: any;
  organizationDetails: any;
  typeAndCategoryDetails: any;
  codeOfConductDetails: any;

  corporate_step = false;
  contact_step = false;
  business_step = false;
  organization_step = false;
  type_and_category_step = false;
  code_of_category_step = false;

  step = 1;

  constructor(private formBuilder: FormBuilder, private auth : AuthenticationService) { }

  ngOnInit(): void {

    
    this.auth.authGetMembership().subscribe(
      (res) =>{
        console.log(res)
      }
    )
    

    // Done
    this.corporateDetails = this.formBuilder.group({
      Name_of_Organization: ['AHNMI', Validators.required ],
      Address: ['Noida', Validators.required],
      City: ['Noida', Validators.required],
      Pincode: ['201010', Validators.required],
      Telephone: ['7011071128', Validators.required],
      Fax: ['701107', Validators.required],
      Website: ['www.ahnmi.in ', Validators.required],
      Organization_Head_in_India: ['Organization', Validators.required],
      Designation: ['Designation', Validators.required],
      Direct_Phone: ['7011071128', Validators.required],
      Mobile: ['7011071128', Validators.required],
      Email_Id: ['ravi701107@gmail.com', [Validators.required, Validators.email]],
    });

    // Done
    this.contactDetails = this.formBuilder.group({
      Name_Mr_Ms: ['Gaura Verma', Validators.required],
      Designation_2: ['Exceutive Manager', Validators.required],
      Direct_Phone_2: ['7011071128', Validators.required],
      Mobile_2: ['7011071128',Validators.required ],
      Email_id_2: ['gaura@ahnmi.in', [Validators.required, Validators.email] ],
    });

    // Done
    this.businessDetails = this.formBuilder.group({
      
    });

    // Done
    this.organizationDetails = this.formBuilder.group({
      year_Of_establishment: ['2022', Validators.required ],
      annual_revenue: ['2022', Validators.required ],
      total_employees: ['200',Validators.required ],
      manufacturing: ['Herbal',Validators.required ],
      sales_admin_professionals: ['1Cr', Validators.required ],
    })

    // Done
    this.typeAndCategoryDetails = this.formBuilder.group({
      cheque_no : ['231278312831237', Validators.required ],
      date : ['12/12/2023', Validators.required ],
      drawn_on_bank : ['23123', Validators.required ],
    })

    // DOne
    this.codeOfConductDetails = this.formBuilder.group({
      file : ['', ],
      name : ['Gaura Verma', Validators.required ],
      place : ['Noida', Validators.required ],
      designation : ['E M', Validators.required ],
      date : ['12/12/2023', Validators.required],
    })


    this.membershipForm = [...this.corporateDetails.value, ...this.contactDetails.value]

    console.log('Hello',this.membershipForm.values)



  }

  // get membership(){
  //   return this.membershipForm.controls;
  // }

  get corporate() {
    return this.corporateDetails.controls;
  }

  get contact() {
    return this.contactDetails.controls;
  }

  get organization() {
    return this.organizationDetails.controls;
  }

  get typeandcategory () {
    return this.typeAndCategoryDetails.controls;
  }

  get codeofconduct (){
    return this.codeOfConductDetails.controls;
  }

  next() {

    if (this.step == 1) {
      this.corporate_step = true;
      if (this.corporateDetails.invalid) { return }
      this.step++
    }

    else if (this.step == 2) {
      this.contact_step = true;
      if (this.contactDetails.invalid) { return }
      this.step++;
    }

    else if (this.step == 3) {

      this.business_step = true;
      if (this.businessDetails.invalid) { return }
      this.step++
    }

    else if (this.step == 4) {
      this.organization_step = true;
      if (this.organizationDetails.invalid) { return }
      this.step++
    }

    else if (this.step == 5) {
      this.type_and_category_step = true;
      if (this.typeAndCategoryDetails.invalid) { return }
      this.step++
    }

    else if (this.step == 6) {
      this.code_of_category_step = true;
      if (this.codeOfConductDetails.invalid) { return }
      this.step++
    }

  }

  previous() {
    this.step--

    if (this.step == 1) {
      this.contact_step = false;
    }
    if (this.step == 2) {
      this.business_step = false;
    }
    if (this.step == 3) {
      this.organization_step = false
    }
    if (this.step == 4) {
      this.type_and_category_step = false
    }
    if (this.step == 5) {
      this.code_of_category_step = false
    }

  }

  getMembership() {

    this.auth.authGetMembership().subscribe(
      (res) => {
        console.log(res)
      }
    )

    console.log(this.corporateDetails.value)
    console.log(this.contactDetails.value)
    console.log(this.businessDetails.value)
    console.log(this.organizationDetails.value)
    console.log(this.typeAndCategoryDetails.value)
    console.log(this.codeOfConductDetails.value)

    this.membershipForm = Object.assign(
      this.corporateDetails.value,
      this.contactDetails.value, 
      this.businessDetails.value,
      this.organizationDetails.value, 
      this.typeAndCategoryDetails.value, 
      this.codeOfConductDetails.value, 
      )

    console.log(this.membershipForm)
    
    
    this.auth.authMembership(this.membershipForm).subscribe(
      (res) => {
        console.log(res)
      }
    )
    
  }

}
