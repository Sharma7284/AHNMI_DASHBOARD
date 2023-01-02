import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-pages-policy-adovcacy',
  templateUrl: './pages-policy-adovcacy.component.html',
  styleUrls: ['./pages-policy-adovcacy.component.css']
})
export class PagesPolicyAdovcacyComponent implements OnInit {

  categoriesData: any
  isLoading: boolean = false

  constructor(private route: Router, private service: AuthenticationService) { }

  ngOnInit(): void {

    this.getPolicy()

  }

  getPolicy() {

    this.isLoading = true

    setTimeout(() => {

      this.service.getCategories().subscribe(
        (res) => {

          this.isLoading = false

          console.log(res)
          this.categoriesData = res
        },
        (error) => {
          this.isLoading = false
        }
      )
    }, 300);

  }

  view() {

    this.route.navigate(['/pages-view-policy-adovcacy']).then(() => {
      window.location.reload();
    })
  }

}
