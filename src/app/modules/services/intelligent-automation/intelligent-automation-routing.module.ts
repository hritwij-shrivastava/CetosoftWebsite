import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntelligentAutomationComponent } from './intelligent-automation.component';

const routes: Routes = [{ path: '', component: IntelligentAutomationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntelligentAutomationRoutingModule { }
