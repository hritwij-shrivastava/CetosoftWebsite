import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateSocialResponsibilityRoutingModule } from './corporate-social-responsibility-routing.module';
import { CorporateSocialResponsibilityComponent } from './corporate-social-responsibility.component';


@NgModule({
  declarations: [
    CorporateSocialResponsibilityComponent
  ],
  imports: [
    CommonModule,
    CorporateSocialResponsibilityRoutingModule
  ]
})
export class CorporateSocialResponsibilityModule { }
