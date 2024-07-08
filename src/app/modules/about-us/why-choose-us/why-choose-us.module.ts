import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyChooseUsRoutingModule } from './why-choose-us-routing.module';
import { WhyChooseUsComponent } from './why-choose-us.component';


@NgModule({
  declarations: [
    WhyChooseUsComponent
  ],
  imports: [
    CommonModule,
    WhyChooseUsRoutingModule
  ]
})
export class WhyChooseUsModule { }
