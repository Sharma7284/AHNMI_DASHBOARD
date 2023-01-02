import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-memberpost',
  templateUrl: './memberpost.component.html',
  styleUrls: ['./memberpost.component.css']
})
export class MemberpostComponent implements OnInit {

  memberForm !: FormGroup

  constructor( private service : AuthenticationService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.memberForm = this.formBuilder.group({
      postmessage : ['', Validators.required],
      postimage : ['', Validators.required],
      document_id : ['4']
    })

    this.service.getMemberPost(4).subscribe(
      (res) => {
        console.log(res)
      }
    )

  }

  onSumbit(){

    console.log(this.memberForm.value)

    this.service.postMember(this.memberForm.value).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }
}
