import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pages-regulatory-support',
  templateUrl: './pages-regulatory-support.component.html',
  styleUrls: ['./pages-regulatory-support.component.css']
})
export class PagesRegulatorySupportComponent implements OnInit {

  slug: any

  regulatoryData: any = [
    { id: 1, slug: 'fssai', title: 'FSSAI', short: '', long: '' },
    { id: 2, slug: 'd&c', title: 'D&C', short: '', long: '' },
    { id: 3, slug: 'bda', title: 'BDA', short: '', long: '' },
    { id: 4, slug: 'exim', title: 'EXIM', short: '', long: '' },
  ]


  constructor(private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(
      (res) => {

        this.slug = res.get('id')

      }
    )

    console.log(this.regulatoryData)
  }

  view() {

    let slug = this.regulatoryData.slug
    this.route.navigate(['/pages-regulaltory-support/' + slug])


  }

}
