import { Component, OnInit } from '@angular/core';
import { Element, Elements, ElementsOptions, StripeService, Element as StripeElement } from 'ngx-stripe';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  stripeForm !: FormGroup
  elements: any
  card: any

  // Stripe Variables
  paymentstatus: any;
  stripedata: any;
  submitted: any;
  loading: any;
  check_payment_status: any;
  payment_intent: any;
  linkforvarification: any
  linkforvarification1: any

  // Payment Variable
  ammount: any

  elementsoptions: ElementsOptions = {
    locale: 'en'
  }

  constructor(private fb: FormBuilder, private stripeservice: StripeService, private auth: AuthenticationService) { }

  ngOnInit(): void {

    this.stripeForm = this.fb.group({
      name: ['', Validators.required],
      // ammount: ['', Validators.required]
    })

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    this.stripeService()

  }

  checkout() {

    const name = this.stripeForm.get('name')?.value;

    this.stripedata = this.stripeForm.value

    this.stripeservice
      .createToken(this.card, { name })
      .subscribe(result => {
        console.log(result);
        if (result.token) {
          this.stripedata['token'] = result.token
          this.stripedata['Amount'] = this.ammount

          this.auth.createPayment(this.stripedata).subscribe(res => {
            // if(res['success']){
            console.log(res)
            // }
            this.linkforvarification = res
            this.linkforvarification1 = this.linkforvarification.confirm.next_action.redirect_to_url.url;
            window.open(this.linkforvarification1, '_self');
          })
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  // Stripe Service
  stripeService() {
    this.stripeservice.elements(this.elementsoptions).subscribe(elements => {
      this.elements = elements;

      if (!this.card) {
        this.card = this.elements.create('card', {
          iconStyle: 'solid',
          style: {
            base: {
              iconColor: 'green',
              color: 'black',
              fontSize: '16px',
              fontFamily: '"Nunito", sans-serif',
            }
          }
        });
        this.card.mount('#card-element');
      }
    })
  }

}
