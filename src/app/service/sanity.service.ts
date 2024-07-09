import { Injectable } from '@angular/core';
import {createClient} from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";
import { Blog } from './blog';
// import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  constructor() { }

  // sanityClientCredentials = {
  //   option: createClient({
  //     projectId: "s1yju0p6",
  //     dataset: "production"
  //   })
  // }

  sanityClientCredentials = createClient({
    projectId: 's1yju0p6',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

  urlFor = (source: any) =>
  imageUrlBuilder(this.sanityClientCredentials).image(source);
  async getBlogs(): Promise<Blog[]> {
    return await this.sanityClientCredentials.fetch(
      `*[_type == "blog"]`
    );
  }
}