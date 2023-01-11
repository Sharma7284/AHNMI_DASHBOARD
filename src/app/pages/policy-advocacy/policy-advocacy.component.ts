import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { AuthenticationService } from 'src/app/services/authentication.service';

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

  title : any

  isLoading: boolean = false

  constructor(private service: AuthenticationService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    console.log(this.src)

    this.replyCommentId = NaN;

    this.activeRoute.paramMap.subscribe(
      (res) => {
        console.log(res)
        this.categoriesSlug = res.get('id')
        console.log(this.categoriesSlug, ' hey')
        // this.subCategoriesSlug = res.get('id2')
        this.documentSlug = res.get('id2')
        // console.log(this.documentSlug)
        // console.log(this.documentSlug)
      }
    )


    this.getCategories()

    this.documentFile(this.documentSlug)

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
    this.service.getCategories().subscribe(
      (res) => {
        this.categories = res
        console.log(res)
        this.getSubCategories(res)
        
        // this.subCategoriesTitle = res.Category_name
      }
    )
  }

  // Get SubCategories
  getSubCategories(e: any) {


    this.service.getSubCategories(this.categoriesSlug).subscribe(
      (res) => {
        console.log(res)
        this.subCategories = res
        this.getDocument(res[0].id)
        
      }
    )

  }

  getDocument(id: any) {


    this.service.getDocument(id).subscribe(
      (res) => {
        console.log(res)
        this.documentData = res
      }
    )
  }

  documentFile(documentName: any) {

    this.service.getDocumentFile(documentName).subscribe(
      (res) => {
        console.log(res)
        this.docId = res.id
        this.image = 'https://datastuntstaging.co.in/ahnmi_lara/storage/app/' + res.docs_image
        this.src = 'https://datastuntstaging.co.in/ahnmi_lara/storage/app/' + res.pdf_file
        console.log(this.docId)
        // this.src = JSON.parse(res)
        console.log(this.src)
        this.getComment(this.docId)
        this.route.navigate(['/policy-adovcacy/', this.categoriesSlug, documentName])
      }
    )
  }




  // Post Comment 
  onComment() {

    let document_id = this.docId
    console.log(document_id)
    let comment = this.commentForm.get('postmessage')?.value
    console.log(comment)

    this.isLoading = true

    document.getElementById('commentBtn')?.classList.add('hide')

    this.service.postMember(comment, document_id).subscribe(
      (res) => {

        this.isLoading = false
        document.getElementById('commentBtn')?.classList.remove('hide')

        this.commentForm.reset()

        console.log(res)
        this.comments = res[1]
      }
    )

  }

  getComment(id: any) {

    console.log(id, ' hey')
    this.service.getMemberPost(id).subscribe(
      (res) => {
        this.comments = res
        this.formid = res.id
        console.log(res)
        // console.log(this.formid)
      }
    )
  }


  onReply(e: any) {
    const post_comment = this.replyForm.get('post_comment')?.value
    console.log(post_comment)

    let document_id = this.docId
    // this.docId
    console.log(this.docId)

    document.getElementById('replybtn')?.classList.add('hide')
    this.isReply = true

    this.service.postReply(post_comment, e, document_id).subscribe(
      (res) => {
        console.log(res)
        this.replyCommentId = NaN;
        this.replyForm.reset()

        document.getElementById('replybtn')?.classList.remove('hide')
        this.isReply = false

        this.comments = res[1]
      },(error) => {
        document.getElementById('replybtn')?.classList.remove('hide')
        this.isReply = false
      }
    )
  }
  replyCommentId: any = NaN;
  reply(e: any) {
    console.log(e)
    console.log(this.comments.indexOf(e))
    this.replyCommentId = this.comments.indexOf(e)

  }

  cancel() {
    this.replyCommentId = NaN;
  }

  browse(e : any, id :any) {
    console.log(e)
    console.log(this.title)
    
    this.route.navigate(['policy-adovcacy/' + id])
    this.title = e
  }

  // addLoading(){
  //   this.isLoading  =true
  // }

}


