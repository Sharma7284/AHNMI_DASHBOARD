import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  header = document.getElementById('header')
  
  constructor() { }

  ngOnInit(): void {

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        this.header?.classList.add('sticky')
      } else {
        this.header?.classList.remove('sticky')
      }
    })

  }



}
