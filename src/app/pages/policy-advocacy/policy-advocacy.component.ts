import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms'
import { AuthenticationService } from 'src/app/services/authentication.service';

// Import PIPE 
import { Pipe, PipeTransform } from '@angular/core';
// import { pipe } from 'rxjs';


@Component({
  selector: 'app-policy-advocacy',
  templateUrl: './policy-advocacy.component.html',
  styleUrls: ['./policy-advocacy.component.css']
})



export class PolicyAdvocacyComponent implements OnInit {

  src = 'https://datastuntstaging.co.in/ahnmi_lara/storage/app/uploads/documents/PDF/pli-document/PLI.pdf'

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

  docId: any
  // Comment Form Variables
  commentForm !: FormGroup
  replyForm !: FormGroup
  comments: any
  isReply: boolean = false

  // Image
  image: any

  formid: any

  title: any

  isLoading: boolean = false


  // Seacrh Functionality Variable
  searchText : any
  

  constructor(private service: AuthenticationService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.replyCommentId = NaN;

    this.activeRoute.paramMap.subscribe(
      (res) => {
        this.categoriesSlug = res.get('id')
        this.documentSlug = res.get('id2')
      }
    )


    if (!this.categoriesSlug && !this.documentSlug) {
      this.getCategories()
    }

    if (this.categoriesSlug) {
      this.getSubCategories(this.categoriesSlug, this.docId)
    }

    if (this.documentSlug) {
      this.documentFile(this.documentSlug)
    }

    this.commentForm = this.fb.group({
      postmessage: ['', Validators.required]
    })

    this.replyForm = this.fb.group({
      post_comment: ['', Validators.required],
    })



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

    this.isLoading = true

    this.service.getCategories().subscribe(
      (res) => {

        this.isLoading = false
        this.categories = res
        console.log(res)
        // this.getSubCategories(this.categoriesSlug, res)
      }
    )
  }

  // Get SubCategories
  getSubCategories(e: any, id: any) {

    console.log(e)
    console.log(id)
    this.title = e

    this.service.getSubCategories(e).subscribe(
      (res) => {
        this.subCategories = res
        this.getDocument(res[0].id)

      }
    )

  }

  getDocument(id: any) {


    this.service.getDocument(id).subscribe(
      (res) => {
        this.documentData = res
        console.log(res)
      }
    )
  }

  documentFile(documentName: any) {

    this.service.getDocumentFile(documentName).subscribe(
      (res) => {
        this.docId = res.id
        this.image = 'https://datastuntstaging.co.in/ahnmi_lara/storage/app/' + res.docs_image
        this.src = 'https://datastuntstaging.co.in/ahnmi_lara/storage/app/' + res.pdf_file

        this.getComment(this.docId)
        this.route.navigate(['/policy-adovcacy/', this.categoriesSlug, documentName])
      }
    )
  }




  // Post Comment 
  onComment() {

    let document_id = this.docId
    let comment = this.commentForm.get('postmessage')?.value

    this.isLoading = true

    document.getElementById('commentBtn')?.classList.add('hide')

    this.service.postMember(comment, document_id).subscribe(
      (res) => {

        this.isLoading = false
        document.getElementById('commentBtn')?.classList.remove('hide')

        this.commentForm.reset()

        this.comments = res[1]
      }
    )

  }

  getComment(id: any) {

    this.service.getMemberPost(id).subscribe(
      (res) => {
        this.comments = res
        this.formid = res.id
      }
    )
  }


  onReply(e: any) {

    const post_comment = this.replyForm.get('post_comment')?.value
    let document_id = this.docId

    document.getElementById('replybtn')?.classList.add('hide')
    this.isReply = true

    this.service.postReply(post_comment, e, document_id).subscribe(
      (res) => {
        this.replyCommentId = NaN;
        this.replyForm.reset()

        document.getElementById('replybtn')?.classList.remove('hide')
        this.isReply = false

        this.comments = res[1]
      }, (error) => {
        document.getElementById('replybtn')?.classList.remove('hide')
        this.isReply = false
      }
    )
  }

  replyCommentId: any = NaN;

  reply(e: any) {
    this.replyCommentId = this.comments.indexOf(e)
  }

  cancel() {
    this.replyCommentId = NaN;
  }

  browse(e: any, id: any) {

    console.log(e, id)

    this.route.navigate(['policy-adovcacy/' + id])

    this.getSubCategories(e, id)


  }


}


