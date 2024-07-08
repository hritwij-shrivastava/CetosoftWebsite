import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhyChooseUsComponent } from './why-choose-us.component';

const routes: Routes = [{ path: '', component: WhyChooseUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyChooseUsRoutingModule { }
