import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  items : any;

  constructor( private service : AuthenticationService ) { }

  ngOnInit(): void {

    this.service.getSubCategories().subscribe(
      (res) => {
        console.log(res)
        this.items = res
      }
    )

  }

}
