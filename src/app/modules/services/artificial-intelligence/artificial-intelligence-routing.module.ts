import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtificialIntelligenceComponent } from './artificial-intelligence.component';

const routes: Routes = [{ path: '', component: ArtificialIntelligenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtificialIntelligenceRoutingModule { }
