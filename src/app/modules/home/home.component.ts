import { Component, OnInit } from '@angular/core';

import { Blog } from '../../service/blog';
import { SanityService } from '../../service/sanity.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private sanityService: SanityService ) { }

  blogs: Blog[] = [];

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  // ngOnInit(): void {
  //   console.error("testtttttttttttttttttt")
  //   this.getBlogs();
  // }

  // async getBlogs(): Promise<Blog[]>  {
  //   console.log("=======================")
  //   this.blogs = await this.sanityService.getBlogs();
  //   console.log(this.blogs)
  //   return this.blogs;
  // } 
  onTextClicked() {
    console.log("The event clicked: ");
  }
}