import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtificialIntelligenceRoutingModule } from './artificial-intelligence-routing.module';
import { ArtificialIntelligenceComponent } from './artificial-intelligence.component';


@NgModule({
  declarations: [
    ArtificialIntelligenceComponent
  ],
  imports: [
    CommonModule,
    ArtificialIntelligenceRoutingModule
  ]
})
export class ArtificialIntelligenceModule { }
