import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PressReleasesComponent } from './press-releases.component';

const routes: Routes = [{ path: '', component: PressReleasesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PressReleasesRoutingModule { }
