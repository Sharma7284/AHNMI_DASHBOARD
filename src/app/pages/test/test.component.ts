import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  membershipForm : any

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    // Done
    this.corporateDetails = this.formBuilder.group({
      Name_of_Organization: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      Pincode: ['', Validators.required],
      Telephone: ['', Validators.required],
      Fax: ['', Validators.required],
      Website: ['', Validators.required],
      Organization_Head_in_India: ['', Validators.required],
      Designation: ['', Validators.required],
      Direct_Phone: ['', Validators.required],
      Mobile: ['', Validators.required],
      Email_Id: ['', [Validators.required, Validators.email]],
    });

    // Done
    this.contactDetails = this.formBuilder.group({
      Name_Mr_Ms: ['', Validators.required],
      Designation_2: ['', Validators.required],
      Direct_Phone_2: ['', Validators.required],
      Mobile_2: ['', Validators.required],
      Email_id_2: ['', Validators.required],
    });

    // Not Done
    this.businessDetails = this.formBuilder.group({
      highest_qualification: ['',],
      university: ['',],
      total_marks: ['',]
    });

    // Done
    this.organizationDetails = this.formBuilder.group({
      year_Of_establishment: ['', Validators.required],
      annual_revenue: ['', Validators.required],
      total_employees: ['', Validators.required],
      manufacturing: ['', Validators.required],
      sales_admin_professionals: ['', Validators.required],
    })

    // Done
    this.typeAndCategoryDetails = this.formBuilder.group({
      cheque_no : ['', Validators.required],
      date : ['', Validators.required],
      drawn_on_bank : ['', Validators.required],
    })

    // 
    this.codeOfConductDetails = this.formBuilder.group({
      file : ['', Validators.required],
      name : ['', Validators.required],
      place : ['', Validators.required],
      designation : ['', Validators.required],
      date : ['', Validators.required],
    })

    this.membershipForm = this.formBuilder.group({

      first : this.corporateDetails,
      second : this.contactDetails,
      third : this.businessDetails,
      four : this.organizationDetails,
      five : this.typeAndCategoryDetails,
      six : this.codeOfConductDetails

    })

    console.log(this.membershipForm.value)

  }

  get membership(){
    return this.membershipForm.controls;
  }

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

    if( this.step == 6){
      this.code_of_category_step = true;
      if( this.codeOfConductDetails.invalid) { return }
      alert('Successfully !!! Done');
    }
  }

}
