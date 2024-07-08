import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntelligentAutomationRoutingModule } from './intelligent-automation-routing.module';
import { IntelligentAutomationComponent } from './intelligent-automation.component';


@NgModule({
  declarations: [
    IntelligentAutomationComponent
  ],
  imports: [
    CommonModule,
    IntelligentAutomationRoutingModule
  ]
})
export class IntelligentAutomationModule { }
