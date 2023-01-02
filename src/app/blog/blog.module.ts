import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BlogComponent
  ],
  
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
