import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-pages-view-privacy-policy',
  templateUrl: './pages-view-privacy-policy.component.html',
  styleUrls: ['./pages-view-privacy-policy.component.css']
})
export class PagesViewPrivacyPolicyComponent implements OnInit {

  // Pdf Source Url { Variable }
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"

  subCategory: any

  document: any = [
    { id: '1', title: 'title', description: 'The quick, brown fox jumps over a lazy dog. Junk MTV quiz graced by fox whelps.', btn_title: 'View More' },
    { id: '2', title: 'title', description: 'The quick, brown fox jumps over a lazy dog. Junk MTV quiz graced by fox whelps.', btn_title: 'View More' },
  ]


  documentTable: any = [
    { id: '1001', slug: 'privacy-policy-document-title-1', documentTitle: 'Privacy Policy Document Title 1 ', },
    { id: '1002', slug: 'privacy-policy-document-title-2', documentTitle: 'Privacy Policy Document Title 2 ', },
    { id: '1003', slug: 'privacy-policy-document-title-3', documentTitle: 'Privacy Policy Document Title 3 ', },
    { id: '1004', slug: 'privacy-policy-document-title-4', documentTitle: 'Privacy Policy Document Title 4 ', },
    { id: '1005', slug: 'privacy-policy-document-title-5', documentTitle: 'Privacy Policy Document Title 5 ', },
    { id: '1006', slug: 'privacy-policy-document-title-6', documentTitle: 'Privacy Policy Document Title 6 ', },
    { id: '1007', slug: 'privacy-policy-document-title-7', documentTitle: 'Privacy Policy Document Title 7 ', },
    { id: '1008', slug: 'privacy-policy-document-title-8', documentTitle: 'Privacy Policy Document Title 8 ', },
  ]

  slug: any
  title: any

  // pdf btn { Variable }
  page: number = 1;
  totalpage: number = 0;

  constructor(private route: Router, private activeRoute: ActivatedRoute, private service : AuthenticationService) { }

  ngOnInit(): void {

    console.log(this.subCategory)

    this.activeRoute.paramMap.subscribe(
      (res) => {

        this.slug = res.get('id')

        this.title = this.documentTable.documentTitle

        console.log(this.slug)

        this.getSubCategories()

      }
    )

  }

  getSubCategories() {
    this.service.getSubCategories().subscribe(
      (res) => {
        this.document = res
        console.log(this.document)
      } 
    )
  } 

  pdfLoaded(src: any) {
    this.totalpage = src.numPages
  }

  next() {
    this.page++
  }

  prev() {
    this.page--
  }

  back(){
    this.route.navigate(['/pages-view-policy-adovcacy']).then(()=>{
      window.location.reload()
    })
  }
}
