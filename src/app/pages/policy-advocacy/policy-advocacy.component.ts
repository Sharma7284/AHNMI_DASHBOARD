import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-policy-advocacy',
  templateUrl: './policy-advocacy.component.html',
  styleUrls: ['./policy-advocacy.component.css']
})
export class PolicyAdvocacyComponent implements OnInit {

  src = "https://datastuntstaging.co.in/ahnmi_lara/storage/app/public/uploads/documents/PDF/pli-document/PLI.pdf"

  categories: any
  categoriesId: any
  categoriesSlug: any

  subCategories: any
  subCategoriesId: any
  subCategoriesSlug: any

  documentData: any
  documentSlug: any

  // pdf btn { Variable }
  page: number = 1;
  totalpage: number = 0;


  constructor(private service: AuthenticationService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(
      (res) => {
        this.categoriesSlug = res.get('id')
        // this.subCategoriesSlug = res.get('id2')
        this.documentSlug = res.get('id2')
        // console.log(this.documentSlug)
      }
    )

    this.getCategories()
    this.getSubCategories()
    this.getDocument(2)
  }

  // Pdf
  pdfLoaded(src: any) {
    this.totalpage = src.numPages
  }

  next() {
    this.page++
  }

  prev() {
    this.page--
  }

  // Get Categories
  getCategories() {
    this.service.getCategories().subscribe(
      (res) => {
        this.categories = res
        console.log(res)
      }
    )
  }

  // Get SubCategories
  getSubCategories() {

    this.service.getSubCategories(this.categoriesSlug).subscribe(
      (res) => {
        // console.log(res)
        this.subCategories = res

      }
    )

  }

  getDocument(id: any) {

    this.service.getDocument(id).subscribe(
      (res) => {
        // console.log(res)
        this.documentData = res
      }
    )
  }

  documentFile(documentId: any, documentName: any) {
    
    this.service.getDocumentFile(documentName).subscribe(
      (res) => {
        console.log(res)
        let filepath = res
        console.log(filepath.pdf_file)

        // this.src = this.src + res[0].pdf_file
        console.log(this.src)

        this.route.navigate(['/policy-adovcacy/', this.categoriesSlug, documentName])
      }
    )
  }

}
