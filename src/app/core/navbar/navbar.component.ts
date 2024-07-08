import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  iscompanyDropdownOpen = false;
  isservicesDropdownOpen = false;
  isblogDropdownOpen = false;

  constructor(private router: Router) {}

  toggleDropdown(isOpen: boolean, id:string) {
    if(id=='companyDropdown'){
      this.iscompanyDropdownOpen = isOpen;
    }
    if(id=='servicesDropdown'){
      this.isservicesDropdownOpen = isOpen;
    }
    if(id=='blogDropdown'){
      this.isblogDropdownOpen = isOpen;
    }
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.onRouteChange(event);
    });
  }

  onRouteChange(event: NavigationEnd) {
    // console.log('Route changed to:', event.urlAfterRedirects);
    this.iscompanyDropdownOpen = false;
    this.isservicesDropdownOpen = false;
    this.isblogDropdownOpen = false;
  
  }
}
