import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {


  data = { head: 'Registered', subline: 'Successfully, Created New Account' }

  constructor(private service: AuthenticationService) { }

  ngOnInit(): void {
    console.log('hiii')

    console.log(this.service.getToast(this.data))

  }



  show() {

    document.querySelector('.toast-content')?.classList.add('active')
    document.querySelector('.bar')?.classList.add('active')

    setTimeout(() => {
      document.querySelector('.toast-content')?.classList.remove('active')
      document.querySelector('.bar')?.classList.remove('active')
    }, 4900);
  }

}
