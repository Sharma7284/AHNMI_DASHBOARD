import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-policy-adovcacy',
  templateUrl: './pages-policy-adovcacy.component.html',
  styleUrls: ['./pages-policy-adovcacy.component.css']
})
export class PagesPolicyAdovcacyComponent implements OnInit {


  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  view() {

    this.route.navigate(['/pages-view-policy-adovcacy']).then(() => {
      window.location.reload();
    }
    )
  }

}
