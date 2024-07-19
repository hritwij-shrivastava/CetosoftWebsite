import { Component, OnInit } from '@angular/core';

// import { Blog } from '../../service/blog';
// import { SanityService } from 'src/app/service/sanity.service.ts';
import { SanityService } from '../../../service/sanity.service';
import { title } from 'process';

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrl: './press-releases.component.css'
})
export class PressReleasesComponent {
  constructor(private sanityService: SanityService ) { }

  pressReleases: any[] = [];

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit(): void {
    // console.log("testtttttttttttttttttt")
    this.getPressReleases();
  }

  async getPressReleases()  {
    // console.log("=======================")
    this.pressReleases = await this.sanityService.getPressReleases();
    console.log(this.pressReleases)
    console.log(this.pressReleases[0].title)
    // return this.blogs;
  } 
  // onTextClicked() {
  //   this.getPressReleases();
  //   // console.log("The event clicked: ");
  // }
}
