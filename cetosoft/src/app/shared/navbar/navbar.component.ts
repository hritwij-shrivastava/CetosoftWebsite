import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  // iscompanyDropdownOpen = false;
  isservicesDropdownOpen = false;
  isnewsDropdownOpen = false;
  isservicesLinkOpen = false;
  iscompanyLinkOpen = false;
  isnewsLinkOpen = false;

  constructor(private router: Router) {}

  toggleDropdown(isOpen: boolean, id:string) {
    // if(id=='companyDropdown'){
    //   this.iscompanyDropdownOpen = isOpen;
    // }
    if(id=='servicesDropdown'){
      this.isservicesDropdownOpen = isOpen;
    }
    if(id=='newsDropdown'){
      this.isnewsDropdownOpen = isOpen;
    }
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.onRouteChange(event);
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Handle dropdown active state on route change
        this.updateActiveStates();
      }
    });
  }

  onRouteChange(event: NavigationEnd) {
    // console.log('Route changed to:', event.urlAfterRedirects);
    // this.iscompanyDropdownOpen = false;
    this.isservicesDropdownOpen = false;
    this.isnewsDropdownOpen = false;
  
  }

  updateActiveStates() {
    // Update the logic here based on your actual routes
    this.isservicesLinkOpen = this.router.url.startsWith('/data-analytics') ||
                                  this.router.url.startsWith('/cloud-computing') ||
                                  this.router.url.startsWith('/intelligent-automation') ||
                                  this.router.url.startsWith('/artificial-intelligence') ||
                                  this.router.url.startsWith('/cyber-security');
    
    // this.iscompanyLinkOpen = this.router.url.startsWith('/about-company') ||
    //                              this.router.url.startsWith('/why-choose-us') ||
    //                              this.router.url.startsWith('/meet-our-team') ||
    //                              this.router.url.startsWith('/get-in-touch');

    this.isnewsLinkOpen = this.router.url.startsWith('/press-releases') ||
                              this.router.url.startsWith('/corporate-social-responsibility') ||
                              this.router.url.startsWith('/social-media') ||
                              this.router.url.startsWith('/events');
  }
}
