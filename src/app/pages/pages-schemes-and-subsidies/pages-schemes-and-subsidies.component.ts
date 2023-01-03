import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pages-schemes-and-subsidies',
  templateUrl: './pages-schemes-and-subsidies.component.html',
  styleUrls: ['./pages-schemes-and-subsidies.component.css']
})
export class PagesSchemesAndSubsidiesComponent implements OnInit {

  schemesAndSubsidiesData : any = [
    {id: 1, slug: 'service-1', title:'', description: ''},
    {id: 2, slug: 'service-2', title:'', description: ''},
    {id: 3, slug: 'service-3', title:'', description: ''},
  ]

  slug : any
  sid : any

  constructor(private route : Router, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(
      (res) => {
  
        this.slug = res.get('id')
        this.sid = res.get('sid')
        console.log(this.sid)

      }
    )

  }

  view(){

    this.route.navigate(['/schemes-&-subsidies/' + 'service'])

  }

  view2(){
    this.route.navigate(['/schemes-&-subsidies/service/' + 'regulatory-checklist'])
  }



}
